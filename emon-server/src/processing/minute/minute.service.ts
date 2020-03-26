import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma/prisma.service';
import * as moment from 'moment';

@Injectable()
export class MinuteService {
    
    constructor(private prisma: PrismaService) {}

    //every minute at 00 seconds
    @Cron('00 * * * * *')
    private process() {
        console.log('[CRON] [MINUTESERVICE}::PROCESSING');
        var y = new Date().getTime();
        
        this.prisma.query.measurements({
            where: {
                dateAddedToDatabase_gte: moment(new Date()).add(-1, 'minutes').toDate()
            },
        }).then(rs => {
            //var cnt: number = 0;
            var acc = rs.reduce((a, b) => {
                a.currentUsage = (a.currentUsage + b.currentUsage) /2;
                // a.gasUsage = (a.gasUsage + b.gasUsage) /2;
                return a
            });

            acc.dateRecorded = new Date();
            acc.gasUsage = rs[rs.length -1].gasUsage;
            acc.returnHigh = rs[rs.length -1].returnHigh;
            acc.returnLow = rs[rs.length -1].returnLow;
            acc.usageHigh = rs[rs.length -1].usageHigh;
            acc.usageLow = rs[rs.length -1].usageLow;

            console.log(`[CRON] [MINUTESERVICE]::DONE`);//::${JSON.stringify(acc)}`);
            console.log('[CRON] [MINUTESERVICE] [WRITING TO DATABASE]');

            this.prisma.mutation.createAverageMinute({
                data: {
                    avCurrentUsage: Number(acc.currentUsage.toFixed(3)),
                    avGasUsage: acc.gasUsage,
                    dateRecorded: new Date(),
                    returnHigh: acc.returnHigh,
                    returnLow: acc.returnLow,
                    usageHigh: acc.usageHigh,
                    usageLow: acc.usageLow,
                    processingTime: (new Date().getTime() - y),
                }
            }).then(final => {
                console.log(`[CRON] [MINUTESERVICE] [WRITE SUCCES]::${final.id}`);
            })
            .catch(err => {
                console.log(`[ERROR] [CRON] [MINUTESERVICE] [WRITE FAILED]`);
            })
            
        }).catch(err => {
            console.log('[ERROR] [CRON] [MINUTESERVICE] [READ FAILED]');
        });
    }
}
