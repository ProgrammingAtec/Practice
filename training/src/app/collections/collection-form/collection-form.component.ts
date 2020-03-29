import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Collection } from '../collection.model';
import { vortex } from '../../router-animations/collections/animation';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss'],
  animations: [
    vortex
  ]
})
export class CollectionFormComponent implements OnInit {
  url: ArrayBuffer | string = 'https://via.placeholder.com/150x216';
  editor: FormGroup;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    this.editor = new FormGroup({
      objectName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.route.data.subscribe((data: {collectionData: Collection}) => {
      this.editor.get('objectName').setValue(data.collectionData.target);
      this.editor.get('description').setValue(data.collectionData.description);
      this.url = data.collectionData.avatar;
    });
  }

  public readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (progressEvent) => {
        this.url = reader.result;
      };
    }
  }
}
