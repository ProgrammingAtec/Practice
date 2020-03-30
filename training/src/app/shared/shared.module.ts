import { NgModule } from '@angular/core';
import { FlexAlignContentDirective } from './directives/flex-align-content.directive';
import { AdjustableChartComponent } from './components/adjustable-chart/adjustable-chart.component';

@NgModule({
  declarations: [
    FlexAlignContentDirective,
    AdjustableChartComponent
  ],
  exports: [
    FlexAlignContentDirective,
    AdjustableChartComponent
  ]
})
export class SharedModule {}
