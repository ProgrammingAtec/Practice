import { NgModule } from '@angular/core';
import { CollectionsComponent } from './collections.component';
import { CustomDataComponent } from './custom-data/custom-data.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule }  from '@angular/cdk/drag-drop'

@NgModule({
    declarations: [
        CollectionsComponent,
        CustomDataComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DragDropModule,
        FormsModule
    ],
    exports: [
        CollectionsComponent,
        CustomDataComponent
    ],
    providers: [],
})
export class MainModule {}