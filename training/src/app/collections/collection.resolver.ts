import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Collection } from './collection.model';
import { Collections } from './mock-collections';


Injectable();
export class CollectionResolver implements Resolve<Observable<Collection>> {
  private allCollection = Collections;

  resolve(route: ActivatedRouteSnapshot) {
    const currentCollectionId = +route.paramMap.get('id');

    return of(this.allCollection.find(item => item.id === currentCollectionId));
  }
}
