import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Collection } from '../collection.model';
import { vortex } from '../../router-animations/collections/animation';
import { Chart, ChartConfiguration } from 'chart.js';
import Quill from 'quill';
import * as Parchment from 'parchment';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss'],
  animations: [
    vortex
  ]
})
export class CollectionFormComponent implements OnInit, AfterViewInit {
  public url: ArrayBuffer | string = 'https://via.placeholder.com/150x216';
  public editor: FormGroup;

  public editorStyle = {
    height: '200px'
  };

  public editorModules = {
    toolbar: [
      ['bold', 'italic', 'link']
    ]
  };

  constructor(private readonly route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.editor = new FormGroup({
      objectName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.route.data.subscribe((data: { collectionData: Collection }) => {
      this.editor.get('objectName').setValue(data.collectionData.target);
      this.editor.get('description').setValue(data.collectionData.description);
      this.url = data.collectionData.avatar;
    });
  }

  public ngAfterViewInit() {

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

  public contentChanged(event) {
    console.log(event);
  }

  // private createCustomLinkBlot() {
  //   const Inline = Quill.import('blots/inline') as typeof Parchment.default.Inline;
  //
  //   class BlotLink extends Inline {
  //     public static create(term: string) {
  //       const node = super.create(term) as Element;
  //       const protocols: string[] = ['http://'];
  //       const includeProtocol = protocols.some(protocol => term.startsWith(protocol));
  //
  //       node.setAttribute('href', includeProtocol ? term : `http://${term}`);
  //       node.setAttribute('target', '_blanl');
  //
  //       return node;
  //     }
  //   }
  //
  //   BlotLink.blotName = 'link';
  //   BlotLink.tagName = 'a';
  //
  //   Quill.register(BlotLink);
  // }
}
