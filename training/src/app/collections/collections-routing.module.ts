import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionFormComponent } from './collection-form/collection-form.component';
import { CollectionsComponent } from './collections.component';
import { CollectionResolver } from './collection.resolver';

const routes: Routes = [
  {
    path: 'main',
    component: CollectionsComponent,
    children: [
      {
        path: ':id', component: CollectionFormComponent,
        data: { animation: 'collection' },
        resolve: { collectionData: CollectionResolver }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
    CollectionResolver
  ],
  exports: [
    RouterModule
  ]
})
export class CollectionsRoutingModule {
}
