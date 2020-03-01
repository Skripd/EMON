import { Module } from '@nestjs/common';
import { MeasurementResolver } from './measurement.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [MeasurementResolver],
})
export class MeasurementModule{ }
