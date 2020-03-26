import { Module } from '@nestjs/common';
import { DailyService } from './daily/daily.service';
import { HourlyService } from './hourly/hourly.service';
import { MinuteService } from './minute/minute.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BacklogService } from './backlog/backlog.service';

@Module({
  providers: [DailyService, HourlyService, MinuteService, BacklogService],
  imports: [PrismaModule]
})
export class ProcessingModule {}
