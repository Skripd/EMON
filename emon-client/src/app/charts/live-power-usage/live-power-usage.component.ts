import { Component, OnInit, ViewEncapsulation, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label, MultiDataSet, BaseChartDirective, SingleDataSet, Colors } from 'ng2-charts';
import { PowerUsageLiveService } from '../services/powerusageLive.service';
import { Subscription } from 'rxjs';

// Constant for maximum measureable power in KWH
const MAX_POWER = 6;

@Component({
  selector: 'app-live-power-usage',
  templateUrl: './live-power-usage.component.html',
  styleUrls: ['./live-power-usage.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LivePowerUsageComponent implements OnInit, OnDestroy {

  public doughnutChartLabels: Label[] = [`Current Usage in KWH (${MAX_POWER})`];
  public doughnutChartData: SingleDataSet = [0, 0];
  // public doughnutChartColors = {
  //   backgroundColor: [
  //     'rgba(57, 153, 76, 1)',
  //     'rgba(186, 186, 186, 1)'
  //   ]
  // }

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartOptions = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
  };

  private liveSubscription: Subscription;

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  @Output() loading = new EventEmitter<boolean>();

  constructor(private powerUsageLiveService: PowerUsageLiveService) {

  }

  ngOnInit(): void {
    this.setLive();
  }

  ngOnDestroy(): void {
    this.liveSubscription.unsubscribe();
  }

  private setLive(): void {
    const self = this;
    this.loading.emit(true);

    if (this.liveSubscription) {
      this.liveSubscription.unsubscribe();
    }

    this.liveSubscription = this.powerUsageLiveService.subscribe().subscribe({
      next(data) {
        // console.log((MAX_POWER - data.data.measurement.node.currentUsage) < 0 ? 0 : (MAX_POWER - data.data.measurement.node.currentUsage) / 6);
        self.doughnutChartData[0] = data.data.measurement.node.currentUsage;
        self.doughnutChartData[1] = (MAX_POWER - data.data.measurement.node.currentUsage) < 0 ? 0 : (MAX_POWER - data.data.measurement.node.currentUsage);
        // self.doughnutChartOptions.circumference = Math.PI * (MAX_POWER - data.data.measurement.node.currentUsage) < 0 ? 0 : (MAX_POWER - data.data.measurement.node.currentUsage) / 6
        self.chart.update();
        self.loading.emit(false);
      },
      error(errors) {
        console.log('[ERROR] [LIVE POWER USAGE]::', errors);
        if (JSON.stringify(errors).includes('401')) {
          self.loading.emit(false);
        } else {
          setTimeout(() => {
            self.setLive();
          }, 500);
        }
      },
      complete() {

      }
    });
  }

}
