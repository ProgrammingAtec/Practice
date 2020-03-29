import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Collections } from './mock-collections';
import { Collection } from './collection.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  public columnItems: Collection[] = Collections;
  public collectionsCounter = 0;

  constructor() {
  }

  ngOnInit() {
  }

  public ondrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columnItems, event.previousIndex, event.currentIndex);
  }

}
