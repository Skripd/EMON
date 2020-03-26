import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlOptions } from './graphql.options';

import { ScheduleModule } from '@nestjs/schedule';

import { PrismaModule } from './prisma/prisma.module';
import { MeasurementModule } from './measurement/measurement.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MqttModule } from './mqtt/mqtt.module';
import { AuthModule } from './auth/auth.module';
import { ProcessingModule } from './processing/processing.module';

@Module({
  imports: [
    PrismaModule,
    MeasurementModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    MqttModule,
    AuthModule,
    ScheduleModule.forRoot(),
    ProcessingModule,
  ],
  providers: [AppService],
  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
