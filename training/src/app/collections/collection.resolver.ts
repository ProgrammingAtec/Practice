import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CollectionModel } from './collection.model';
import { Collections } from './mock-collections';


Injectable();
export class CollectionResolver implements Resolve<Observable<CollectionModel>> {
  private allCollections = Collections;

  resolve(route: ActivatedRouteSnapshot) {
    const currentCollectionId = +route.paramMap.get('id');

    return of(this.allCollections.find(item => item.id === currentCollectionId));
  }
}
