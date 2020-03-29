import { NgModule } from '@angular/core';
import { CollectionsComponent } from './collections.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CollectionFormComponent } from './collection-form/collection-form.component';
import { CollectionsRoutingModule } from './collections-routing.module';

@NgModule({
    declarations: [
      CollectionsComponent,
      CollectionFormComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      DragDropModule,
      FormsModule,
      CollectionsRoutingModule
    ],
    exports: [
      CollectionsComponent,
      CollectionFormComponent
    ],
    providers: [],
})
export class MainModule {}
