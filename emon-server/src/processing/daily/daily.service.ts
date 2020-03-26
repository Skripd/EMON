import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cron } from '@nestjs/schedule';
import * as moment from 'moment';

@Injectable()
export class DailyService {
    constructor(private prisma: PrismaService) {}

    // every day at at 2 minuts and 5 seconds past 4 in the morning.
    @Cron('05 02 04 * * *')
    private process() {
        console.log('[CRON] [DAILYSERVICE}::PROCESSING');
        var y = new Date().getTime();
        
        this.prisma.query.measurements({
            where: {
                dateAddedToDatabase_gte: moment(new Date()).add(-1, 'days').toDate()
            },
            orderBy: "dateRecorded_ASC"
        }).then(rs => {
            if (rs.length === 0) {
                console.log('[CRON] [DAILYSERVICE] [NO DATA SKIPPING PROCESSING]');
                return;
            }
            
            console.log(`[CRON] [DAILYSERVICE] STARTING PROCESSING ${rs.length} elements...`);
            
            var acc = rs.reduce((a, b) => {
                a.currentUsage = (a.currentUsage + b.currentUsage) /2;
                return a
            });

            acc.dateRecorded =  new Date();
            acc.gasUsage =      Number((rs[rs.length -1].gasUsage -   rs[0].gasUsage).toFixed(3));
            acc.returnHigh =    Number((rs[rs.length -1].returnHigh - rs[0].returnHigh).toFixed(3));
            acc.returnLow =     Number((rs[rs.length -1].returnLow -  rs[0].returnLow).toFixed(3));
            acc.usageHigh =     Number((rs[rs.length -1].usageHigh -  rs[0].usageHigh).toFixed(3));
            acc.usageLow =      Number((rs[rs.length -1].usageLow -   rs[0].usageLow).toFixed(3));

            console.log(`[CRON] [DAILYSERVICE]::DONE`);//::${JSON.stringify(acc)}`);
            console.log('[CRON] [DAILYSERVICE] [WRITING TO DATABASE]');

            this.prisma.mutation.createAverageDay({
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
                console.log(`[CRON] [DAILYSERVICE] [WRITE SUCCES]::${final.id}`);
            })
            .catch(err => {
                console.log(`[ERROR] [CRON] [DAILYSERVICE] [WRITE FAILED]`);
            })
            
        }).catch(err => {
            console.log('[ERROR] [CRON] [DAILYSERVICE] [READ FAILED]::' + JSON.stringify(err));
        });
    }
}
