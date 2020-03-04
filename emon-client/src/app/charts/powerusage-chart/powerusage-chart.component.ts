import { Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';

import { PowerUsageGQL } from './powerUsage.aa-service';
import { PowerUsageLiveService } from './powerusageLive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-powerusage-chart',
  templateUrl: './powerusage-chart.component.html',
  styleUrls: ['./powerusage-chart.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PowerusageChartComponent implements OnInit, OnDestroy {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Power Usage Live', yAxisID: 'y-axis-0', xAxisID: 'x-axis-0' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Power Usage Live'
    },
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
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  //
  // public loading: boolean = true;
  public liveSubscription: Subscription;
  public dataSubscription: Subscription;

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  @Output() loading = new EventEmitter<boolean>();

  constructor(
    private powerusageService: PowerUsageGQL,
    private powerusageLiveService: PowerUsageLiveService,
  ) { }

  ngOnInit() {
    this.setLive();
  }

  ngOnDestroy() {
    this.liveSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

  setMode(mode: number, options?: any[]): void {
    switch (mode) {
      case 0: this.setLive();
        break;
      case 1: this.setData(options);
        break;
      default: return;
    }
  }

  async setLive() {
    var self = this;
    this.loading.emit(true);

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    if (this.liveSubscription) {
      this.liveSubscription.unsubscribe();
    }

    // last ten minutes
    this.dataSubscription = this.powerusageService.fetch({
      last: 60
    }).subscribe({
      next(data) {
        self.lineChartData[0].data = data.data.measurements.map(value => value.currentUsage);
        self.lineChartLabels = data.data.measurements.map(v => v.dateRecorded);//new Date(v.dateRecorded).toLocaleTimeString('NL-nl'));
      },
      error(errors) {

      },
      complete() {
        self.liveSubscription = self.powerusageLiveService.subscribe().subscribe({
          next(data) {
            self.loading.emit(false);
            console.log('[GQL SUB DATA]::\n', data);
            self.lineChartData[0].data.shift();
            self.lineChartLabels.shift();

            self.lineChartData[0].data.push(data.data.measurement.node.currentUsage);
            self.lineChartLabels.push(data.data.measurement.node.dateRecorded);//.toLocaleTimeString('NL-nl'));

          },
          error(errors) {
            console.log('[ERROR] [LIVE]::', errors);
          },
          complete() {
            console.log('complete')
          }
        });
      }
    })

  }

  setData(options: any[]) {
    this.loading.emit(true);
    this.lineChartData[0].data = [];
    this.lineChartLabels = [];
    // this.liveSubscription.unsubscribe();

    this.dataSubscription = this.powerusageService.fetch({
      last: options[0]
    }).subscribe(rs => {
      //console.log(rs);
      this.lineChartData[0].data = rs.data.measurements.map(value => value.currentUsage);
      this.lineChartLabels = rs.data.measurements.map(v => new Date(v.dateRecorded).toLocaleTimeString('NL-nl'));
      this.loading.emit(false);
    })
  }

}
