import { Module } from '@nestjs/common';
import { MeasurementResolver } from './measurement.resolver';
import { AverageMinuteResolver } from './averageMinute.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AverageHourResolver } from './averageHour.resolver';
import { AverageDayResolver } from './averageDay.resolver';

@Module({
    imports: [PrismaModule],
    providers: [
        MeasurementResolver,
        AverageMinuteResolver,
        AverageHourResolver,
        AverageDayResolver    
    ],
})
export class MeasurementModule{ }
