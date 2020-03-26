import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { GetHoursPageGQL, GetDaysPageGQL } from 'src/app/generated/graphql';

import * as moment from 'moment';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barchart-daily-chart',
  templateUrl: './barchart-daily-chart.component.html',
  styleUrls: ['./barchart-daily-chart.component.scss']
})
export class BarchartDailyChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          id: 'y-axis-0',
          ticks: {
            min: 0,
            suggestedMax: 1
          }
        }
      ],
      xAxes: [
        {
          id: 'x-axis-0',
          type: 'time',
          ticks: {
            maxTicksLimit: 10,
          },
          time: {
            unit: 'hour',
            unitStepSize: 1,
            // displayFormats: {
            //   minute: 'H:mm'
            // }
          }
        }
      ]
    },
    plugins: {
        datalabels: {
        anchor: 'end',
        align: 'end',
        display: false,
      }
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Cummulative power usage per day' },
    { data: [], label: 'Gas usage in M3 per day' },
  ];

  @Output() loading = new EventEmitter<boolean>();

  constructor(private service: GetDaysPageGQL) {
  }

  ngOnInit(): void {
    const self = this;
    this.loading.emit(true);

    this.service.fetch( {
      dateRecorded_gte: moment(new Date()).add(-7, 'days').toISOString(),
      dateRecorded_lte: moment(new Date()).toISOString(),
    }).subscribe({
      next(data) {
        console.log(`[DAILY CHART] [DATA]::${data}`);
        self.barChartData[0].data = data.data.averageDays.map(value => value.avCurrentUsage);
        self.barChartData[1].data = data.data.averageDays.map(value => value.avGasUsage);
        self.barChartLabels = data.data.averageDays.map(v => v.dateRecorded);
      },
      error(errors) {
        console.error(`[ERROR] [DAILY CHART]::${JSON.stringify(errors)}`);
        setTimeout(() => {
          self.ngOnInit();
        }, 500);
      },
      complete() {
        console.log(`[DAILY CHART] COMPLETE`);
        self.loading.emit(false);
      }
    });
  }

}
