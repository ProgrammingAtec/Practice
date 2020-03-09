import { NgModule } from '@angular/core';
import {FlexAlignContent} from "./directives/flexAlignContent";

@NgModule({
  declarations: [FlexAlignContent],
  exports: [FlexAlignContent]
})
export class SharedModule {}
