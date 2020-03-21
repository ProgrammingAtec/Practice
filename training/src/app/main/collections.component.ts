import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  public columnItems: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
  public collectionsCounter: number = 0;
  public editor: FormGroup;

  constructor() { }

  ngOnInit() {
    this.editor = new FormGroup({
      objectName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      customData: new FormControl('', Validators.required)
    })
  }

  public ondrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columnItems, event.previousIndex, event.currentIndex);
  }

  public readUrl(event) {
    console.log(event);
  }

}
