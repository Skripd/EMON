'''
/*
 * Copyright 2010-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
 '''
 
'''
/*
 * DSMR P1 uitlezer
 */ (c) 10-2012 - GJ - gratis te kopieren en te plakken
'''

'''
/*
 * DSMR 2.2 slimme meter uitlezen met P1 poort USB kabel en versturen via MQTT protocol.
 * 2020 - Frank van Veen - Versie 1.0
 */
'''

from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
from datetime import datetime
import logging
import time
import argparse
import json
import sys
import serial

AllowedActions = ['both', 'publish', 'subscribe']

# Custom MQTT message callback
def customCallback(client, userdata, message):
    print("Received a new message: ")
    print(message.payload)
    print("from topic: ") 
    print(message.topic)
    print("--------------\n\n")

################
#Error display #
################
def show_error():
    ft = sys.exc_info()[0]
    fv = sys.exc_info()[1]
    print("Fout type: %s" % ft )
    print("Fout waarde: %s" % fv )
    return

def TimestampMillisec64():
    return int((datetime.utcnow() - datetime(1970, 1, 1)).total_seconds() * 1000) 

# Read in command-line parameters
parser = argparse.ArgumentParser()
parser.add_argument("-e", "--endpoint", action="store", required=True, dest="host", help="Your AWS IoT custom endpoint")
parser.add_argument("-r", "--rootCA", action="store", required=True, dest="rootCAPath", help="Root CA file path")
parser.add_argument("-c", "--cert", action="store", dest="certificatePath", help="Certificate file path")
parser.add_argument("-k", "--key", action="store", dest="privateKeyPath", help="Private key file path")
parser.add_argument("-p", "--port", action="store", dest="port", type=int, help="Port number override MQTT")
parser.add_argument("-w", "--websocket", action="store_true", dest="useWebsocket", default=False, help="Use MQTT over WebSocket")
parser.add_argument("-id", "--clientId", action="store", dest="clientId", default="basicPubSub", help="Targeted client id")
parser.add_argument("-t", "--topic", action="store", dest="topic", default="home/meting", help="Targeted topic")
parser.add_argument("-m", "--mode", action="store", dest="mode", default="both", help="Operation modes: %s"%str(AllowedActions))

parser.add_argument("-sbr", "--serialbaudrate", action="store", dest="serialbaudrate", type=int, default="9600", help="Baudrate of serial interface")
parser.add_argument("-sto", "--serialtimeout", action="store", dest="serialtimeout", type=int, default="20", help="Serial port timeout")
parser.add_argument("-sp", "--serialport", action="store", dest="serialport", default="/dev/ttyUSB0", help="COMPORT on which the P1 signal comes in")

args = parser.parse_args()
host = args.host
rootCAPath = args.rootCAPath
certificatePath = args.certificatePath
privateKeyPath = args.privateKeyPath
port = args.port
useWebsocket = args.useWebsocket
clientId = args.clientId
topic = args.topic

#Set COM port config
ser = serial.Serial()
ser.baudrate = args.serialbaudrate
ser.bytesize=serial.SEVENBITS
ser.parity=serial.PARITY_EVEN
ser.stopbits=serial.STOPBITS_ONE
ser.xonxoff=0
ser.rtscts=0
ser.timeout=args.serialtimeout
ser.port=args.serialport

#Open COM port
try:
    ser.open()
except:
    sys.exit ("Fout bij het openen van %s. Programma afgebroken."  % ser.name)

p1_teller=0
stack=[]

if args.mode not in AllowedActions:
    parser.error("Unknown --mode option %s. Must be one of %s" % (args.mode, str(AllowedActions)))
    exit(2)

if args.useWebsocket and args.certificatePath and args.privateKeyPath:
    parser.error("X.509 cert authentication and WebSocket are mutual exclusive. Please pick one.")
    exit(2)

if not args.useWebsocket and (not args.certificatePath or not args.privateKeyPath):
    parser.error("Missing credentials for authentication.")
    exit(2)

# Port defaults
if args.useWebsocket and not args.port:  # When no port override for WebSocket, default to 443
    port = 443
if not args.useWebsocket and not args.port:  # When no port override for non-WebSocket, default to 8883
    port = 8883

# Configure logging
logger = logging.getLogger("AWSIoTPythonSDK.core")
logger.setLevel(logging.DEBUG)
streamHandler = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
streamHandler.setFormatter(formatter)
logger.addHandler(streamHandler)
logger.addHandler(streamHandler)

# Init AWSIoTMQTTClient
myAWSIoTMQTTClient = None
if useWebsocket:
    myAWSIoTMQTTClient = AWSIoTMQTTClient(clientId, useWebsocket=True)
    myAWSIoTMQTTClient.configureEndpoint(host, port)
    myAWSIoTMQTTClient.configureCredentials(rootCAPath)
else:
    myAWSIoTMQTTClient = AWSIoTMQTTClient(clientId)
    myAWSIoTMQTTClient.configureEndpoint(host, port)
    myAWSIoTMQTTClient.configureCredentials(rootCAPath, privateKeyPath, certificatePath)

# AWSIoTMQTTClient connection configuration
myAWSIoTMQTTClient.configureAutoReconnectBackoffTime(1, 32, 20)
myAWSIoTMQTTClient.configureOfflinePublishQueueing(-1)  # Infinite offline Publish queueing
myAWSIoTMQTTClient.configureDrainingFrequency(2)  # Draining: 2 Hz
myAWSIoTMQTTClient.configureConnectDisconnectTimeout(10)  # 10 sec
myAWSIoTMQTTClient.configureMQTTOperationTimeout(5)  # 5 sec

# Connect and subscribe to AWS IoT
myAWSIoTMQTTClient.connect()
if args.mode == 'both' or args.mode == 'subscribe':
    myAWSIoTMQTTClient.subscribe(topic, 1, customCallback)
time.sleep(2)

# Publish to the same topic in a loop forever
loopCount = 0
while True:
    message = {}

    while p1_teller < 20:
        p1_line=''
        try:
            p1_raw = ser.readline()
        except:
            sys.exit ("Seriele poort %s kan niet gelezen worden. Programma afgebroken." % ser.name )
        p1_str=str(p1_raw)
        p1_line=p1_str.strip()
        stack.append(p1_line)
        p1_teller = p1_teller +1

    p1_teller=0
    stack_teller=0

    while stack_teller < 20:
       if stack[stack_teller][0:9] == "1-0:1.8.1":
            message["dd"] = float(stack[stack_teller][10:19])
       elif stack[stack_teller][0:9] == "1-0:1.8.2":
            message["pd"] = float(stack[stack_teller][10:19])
       elif stack[stack_teller][0:9] == "1-0:2.8.1":
            message["dt"] = float(stack[stack_teller][10:19])
       elif stack[stack_teller][0:9] == "1-0:2.8.2":
            message["pt"] = float(stack[stack_teller][10:19])
       elif stack[stack_teller][0:9] == "1-0:1.7.0":
            message["av"] = float(stack[stack_teller][10:17]) 
       elif stack[stack_teller][0:9] == "1-0:2.7.0":
            message["tv"] = float(stack[stack_teller][10:17])
       elif stack[stack_teller][0:10] == "0-1:24.3.0":
            message["g"] = float(stack[stack_teller+1][1:10])
       else:
            pass
       stack_teller = stack_teller +1

    stack_teller=0
    stack = []

    if args.mode == 'both' or args.mode == 'publish':
        # message['message'] = args.message
        message['t'] = TimestampMillisec64()
        messageJson = json.dumps(message)
        myAWSIoTMQTTClient.publish(topic, messageJson, 1)
        if args.mode == 'publish':
            print('Published topic %s: %s\n' % (topic, messageJson))
        loopCount += 1
    #time.sleep(1)
