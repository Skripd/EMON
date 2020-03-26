import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cron } from '@nestjs/schedule';
import * as moment from 'moment';

@Injectable()
export class HourlyService {
    constructor(private prisma: PrismaService) {}

    //every hour at 5 seconds past the new hour
    @Cron('05 00 * * * *')
    private process() {
        console.log('[CRON] [HOURLYSERVICE}::PROCESSING');
        var y = new Date().getTime();
        
        this.prisma.query.measurements({
            where: {
                dateAddedToDatabase_gte: moment(new Date()).add(-1, 'hours').toDate()
            },
            orderBy: "dateRecorded_ASC"
        }).then(rs => {
            if (rs.length === 0) {
                console.log('[CRON] [HOURLYSERVICE] [NO DATA SKIPPING PROCESSING]');
                return;
            }
            
            console.log(`[CRON] [HOURLYSERVICE] STARTING PROCESSING ${rs.length} elements...`);
            
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

            console.log(`[CRON] [HOURLYSERVICE]::DONE`);//::${JSON.stringify(acc)}`);
            console.log('[CRON] [HOURLYSERVICE] [WRITING TO DATABASE]');

            this.prisma.mutation.createAverageHour({
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
                console.log(`[CRON] [HOURLYSERVICE] [WRITE SUCCES]::${final.id}`);
            })
            .catch(err => {
                console.log(`[ERROR] [CRON] [HOURLYSERVICE] [WRITE FAILED]`);
            })
            
        }).catch(err => {
            console.log('[ERROR] [CRON] [HOURLYSERVICE] [READ FAILED]::' + JSON.stringify(err));
        });
    }
}
