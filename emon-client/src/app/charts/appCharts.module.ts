import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ClarityModule } from '@clr/angular';

import { PowerusageChartComponent } from './powerusage-chart/powerusage-chart.component';
import { PowerusageCardComponent } from './powerusage-card/powerusage-card.component';

import { LivePowerUsageComponent } from './live-power-usage/live-power-usage.component';
import { LivePowerUsageCardComponent } from './live-power-usage-card/live-power-usage-card.component';

@NgModule({
  declarations: [PowerusageChartComponent, PowerusageCardComponent, LivePowerUsageComponent, LivePowerUsageCardComponent],
  imports: [
    CommonModule,
    ChartsModule,
    ClarityModule
  ],
  exports: [PowerusageCardComponent, LivePowerUsageCardComponent]
})
export class AppChartsModule { }
