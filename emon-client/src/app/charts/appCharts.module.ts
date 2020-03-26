import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ClarityModule } from '@clr/angular';

import { PowerusageChartComponent } from './powerusage-chart/powerusage-chart.component';
import { PowerusageCardComponent } from './powerusage-card/powerusage-card.component';

import { LivePowerUsageComponent } from './live-power-usage/live-power-usage.component';
import { LivePowerUsageCardComponent } from './live-power-usage-card/live-power-usage-card.component';
import { BarchartMinuteCardComponent } from './barchart-minute-card/barchart-minute-card.component';
import { BarchartMinuteChartComponent } from './barchart-minute-chart/barchart-minute-chart.component';
import { BarchartHourlyChartComponent } from './barchart-hourly-chart/barchart-hourly-chart.component';
import { BarchartHourlyCardComponent } from './barchart-hourly-card/barchart-hourly-card.component';
import { BarchartDailyCardComponent } from './barchart-daily-card/barchart-daily-card.component';
import { BarchartDailyChartComponent } from './barchart-daily-chart/barchart-daily-chart.component';

@NgModule({
  declarations: [
    PowerusageChartComponent,
    PowerusageCardComponent,
    LivePowerUsageComponent,
    LivePowerUsageCardComponent,
    BarchartMinuteCardComponent,
    BarchartMinuteChartComponent,
    BarchartHourlyChartComponent,
    BarchartHourlyCardComponent,
    BarchartDailyCardComponent,
    BarchartDailyChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ClarityModule
  ],
  exports: [
    PowerusageCardComponent,
    LivePowerUsageCardComponent,
    BarchartMinuteCardComponent,
    BarchartHourlyCardComponent,
    BarchartDailyCardComponent
  ]
})
export class AppChartsModule { }
