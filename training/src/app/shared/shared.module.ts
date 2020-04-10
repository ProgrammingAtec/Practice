import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexAlignContentDirective } from './directives/flex-align-content.directive';
import { AdjustableChartComponent } from './components/adjustable-chart/adjustable-chart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlexAlignContentDirective,
    AdjustableChartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FlexAlignContentDirective,
    AdjustableChartComponent
  ]
})
export class SharedModule {}
