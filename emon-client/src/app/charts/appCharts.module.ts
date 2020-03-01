import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GasusageChartComponent } from './gasusage-chart/gasusage-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [GasusageChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [GasusageChartComponent]
})
export class AppChartsModule { }
