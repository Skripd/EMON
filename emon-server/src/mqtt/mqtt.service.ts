import { Injectable, Scope } from '@nestjs/common';
import { device, DeviceOptions } from 'aws-iot-device-sdk';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({ scope: Scope.DEFAULT })
export class MqttService {
    // 09e9572950-
    device: device = new device({
        keyPath: 'C:\\Users\\thefr\\source\\repos\\EMON\\emon-server\\certs\\private.pem.key',
        certPath: 'C:\\Users\\thefr\\source\\repos\\EMON\\emon-server\\certs\\certificate.pem.crt',
        caPath: 'C:\\Users\\thefr\\source\\repos\\EMON\\emon-server\\certs\\AmazonRootCA1.pem',
        clientId: 'emon-server',
        host: 'a16v9t42ie8npd-ats.iot.eu-west-1.amazonaws.com',
        port: 8883,
        debug: true,
        baseReconnectTimeMs: 1000,
        maximumReconnectTimeMs: 8000,
    });

    constructor(private database: PrismaService) {

        var self = this;
        this.device.on('error', function (err) {
            console.error(err.toString());
        });

        this.device.on('connect', function () {
            console.log('Connected to MQTT-Broker.');
            self.device.subscribe('home/meting');
            // this.device.subscribe('home/meting');
            // this.device.publish('home/meting', JSON.stringify({ test_data: 1 })); 
        });

        this.device.on('message', function (topic, payload) {
            self.writeToDatabase(JSON.parse(payload.toString()))
            // console.log('message', topic, payload.toString());
        });

        // console.log(this.device)
    }

    private writeToDatabase(jsonMessage) {
        // console.log(JSON.stringify(jsonMessage))
        this.database.mutation.createMeasurement( {
            data: {
                currentUsage: jsonMessage.av,
                dateRecorded: new Date(jsonMessage.t),
                gasUsage: jsonMessage.g,
                returnHigh: jsonMessage.pt,
                returnLow: jsonMessage.dt,
                usageHigh: jsonMessage.pd,
                usageLow: jsonMessage.dd
            }
        }).catch( (reason) => {
            console.error(reason);
        });

        // console.log('written')
    }

    disconnectDevice() {
        this.device.unsubscribe('home/meting');
        this.device.end(false, () => {
            console.log('MQTT gracefull disconnect.')
        });
    }
}
