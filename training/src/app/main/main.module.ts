import { NgModule } from '@angular/core';
import { MaiComponent } from './mai.component';
import { CustomDataComponent } from './custom-data/custom-data.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MaiComponent,
        CustomDataComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        MaiComponent,
        CustomDataComponent
    ],
    providers: [],
})
export class MainModule {}