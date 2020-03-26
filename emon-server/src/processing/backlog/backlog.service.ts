import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cron } from '@nestjs/schedule';
import * as moment from 'moment';

@Injectable()
export class BacklogService {

    counter: number = 0;

    constructor(private prisma: PrismaService) {}

    // Process dates recursively
    @Cron('10 59 20 * * *')
    private processRecurse() {
        this.process(moment(new Date()).add(-18, 'hours').toDate());    
    }

    private process(date: Date) {
        console.log('[CRON] [BATCHSERVICE}::PROCESSING');
        var y = new Date().getTime();
        
        this.prisma.query.measurements({
            where: {
                dateAddedToDatabase_gte: moment(date).startOf('hour').toISOString(),
                dateAddedToDatabase_lte: moment(date).endOf('hour').toISOString()
            },
            orderBy: "dateRecorded_ASC"
        }).then(rs => {
            if (rs.length === 0) {
                console.log('[CRON] [BATCHSERVICE] [NO DATA SKIPPING PROCESSING]');
                if(this.counter >= 1000) {
                    return;
                } else {
                    this.counter++;
                    setTimeout(() => {
                        this.process(moment(date).add(-1, 'hours').toDate());
                    }, 1000);
                    return;
                }
                return;
            }
            
            console.log(`[CRON] [BATCHSERVICE] STARTING PROCESSING ${rs.length} elements...`);
            
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

            console.log(`[CRON] [BATCHSERVICE]::DONE`);//::${JSON.stringify(acc)}`);
            console.log('[CRON] [BATCHSERVICE] [WRITING TO DATABASE]');

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
                console.log(`[CRON] [BATCHSERVICE] [WRITE SUCCES]::${final.id}`);

                if(this.counter >= 1000) {
                    return;
                } else {
                    this.counter++;
                    setTimeout(() => {
                        this.process(moment(date).add(-1, 'hours').toDate());
                    }, 1000);
                return;                }
            })
            .catch(err => {
                console.log(`[ERROR] [CRON] [BATCHSERVICE] [WRITE FAILED]`);
            })
            
        }).catch(err => {
            console.log('[ERROR] [CRON] [BATCHSERVICE] [READ FAILED]::' + JSON.stringify(err));
        });
    }
}
