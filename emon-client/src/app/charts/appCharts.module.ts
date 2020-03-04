import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerusageChartComponent } from './powerusage-chart/powerusage-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PowerusageCardComponent } from './powerusage-card/powerusage-card.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [PowerusageChartComponent, PowerusageCardComponent],
  imports: [
    CommonModule,
    ChartsModule,
    ClarityModule
  ],
  exports: [PowerusageCardComponent]
})
export class AppChartsModule { }
