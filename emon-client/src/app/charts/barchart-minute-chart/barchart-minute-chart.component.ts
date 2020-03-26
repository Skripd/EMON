import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MinuteService } from '../services/minute.service';
import { GetMinutesPageGQL } from '../../generated/graphql';
import * as moment from 'moment';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barchart-minute-chart',
  templateUrl: './barchart-minute-chart.component.html',
  styleUrls: ['./barchart-minute-chart.component.scss']
})
export class BarchartMinuteChartComponent implements OnInit {

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
          // ticks: {
          //   maxTicksLimit: 10,
          // },
          time: {
            unit: 'minute',
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
    { data: [], label: 'Average power usage' },
  ];

  @Output() loading = new EventEmitter<boolean>();

  constructor(private service: GetMinutesPageGQL) {
  }

  ngOnInit(): void {
    const self = this;
    this.loading.emit(true);

    this.service.fetch( {
      dateRecorded_gte: moment(new Date()).add(-1, 'hours').toISOString(),
      dateRecorded_lte: moment(new Date()).toISOString(),
    }).subscribe({
      next(data) {
        console.log(`[MINITE CHART] [DATA]::${data}`);
        self.barChartData[0].data = data.data.averageMinutes.map(value => value.avCurrentUsage);
        self.barChartLabels = data.data.averageMinutes.map(v => v.dateRecorded);
      },
      error(errors) {
        console.error(`[ERROR] [MINUTE CHART]::${JSON.stringify(errors)}`);
        setTimeout(() => {
          self.ngOnInit();
        }, 500);
      },
      complete() {
        console.log(`[MINUTE CHART] COMPLETE`);
        self.loading.emit(false);
      }
    });
  }

}
