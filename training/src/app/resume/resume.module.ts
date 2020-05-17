import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeComponent } from './resume.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: []
})
export class ResumeModule {}
