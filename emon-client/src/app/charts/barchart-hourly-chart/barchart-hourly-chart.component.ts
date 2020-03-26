import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { GetMinutesPageGQL, GetHoursPageGQL } from 'src/app/generated/graphql';
import * as moment from 'moment';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barchart-hourly-chart',
  templateUrl: './barchart-hourly-chart.component.html',
  styleUrls: ['./barchart-hourly-chart.component.scss']
})
export class BarchartHourlyChartComponent implements OnInit {
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
    { data: [], label: 'Commulative power usage per hour' },
    { data: [], label: 'Gas usage in M3 per hour' }
  ];

  @Output() loading = new EventEmitter<boolean>();

  constructor(private service: GetHoursPageGQL) {
  }

  ngOnInit(): void {
    const self = this;
    this.loading.emit(true);

    this.service.fetch( {
      dateRecorded_gte: moment(new Date()).add(-24, 'hours').toISOString(),
      dateRecorded_lte: moment(new Date()).toISOString(),
    }).subscribe({
      next(data) {
        console.log(`[HOURLY CHART] [DATA]::${data}`);
        self.barChartData[0].data = data.data.averageHours.map(value => value.avCurrentUsage);
        self.barChartData[1].data = data.data.averageHours.map(value => value.avGasUsage);
        self.barChartLabels = data.data.averageHours.map(v => v.dateRecorded);
      },
      error(errors) {
        console.error(`[ERROR] [HOURLY CHART]::${JSON.stringify(errors)}`);
        setTimeout(() => {
          self.ngOnInit();
        }, 500);
      },
      complete() {
        console.log(`[HOURLY CHART] COMPLETE`);
        self.loading.emit(false);
      }
    });
  }
}
