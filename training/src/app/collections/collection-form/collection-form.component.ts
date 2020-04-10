import {
  AfterViewInit,
  Compiler,
  Component, ComponentRef,
  NgModule, OnDestroy,
  OnInit, ViewChild, ViewContainerRef
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CollectionModel } from '../collection.model';
import { vortex } from '../../router-animations/collections/animation';
import { Chart, ChartConfiguration } from 'chart.js';
import Quill from 'quill';
import * as Parchment from 'parchment';
import { ContentChange } from 'ngx-quill';
import { QuillToolbarConfig } from 'ngx-quill/src/quill-editor.interfaces';
import Instance = WebAssembly.Instance;

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss'],
  animations: [
    vortex
  ]
})
export class CollectionFormComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('quillContent', {read: ViewContainerRef, static: false}) public quillContent: ViewContainerRef;

  public avatar: ArrayBuffer | string = 'https://via.placeholder.com/150x216';
  public editor: FormGroup;
  public currentCollection: CollectionModel;
  public editorTemplate;
  public editorStyle = {
    height: '200px'
  };
  public editorModules = {
    toolbar: [
      ['bold', 'italic', 'link', 'color']
    ]
  };

  private editorComponentRef;

  constructor(private readonly route: ActivatedRoute,
              private readonly compiler: Compiler) {
  }

  public ngOnInit() {
    this.editor = new FormGroup({
      objectName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.route.data.subscribe((data: { collectionData: CollectionModel }) => {
      this.editor.get('objectName').setValue(data.collectionData.target);
      this.editor.get('description').setValue(data.collectionData.description);
      this.currentCollection = data.collectionData;
      this.avatar = data.collectionData.avatar;
    });
  }

  public ngAfterViewInit(): void {

  }

  public ngOnDestroy(): void {
    if (this.editorComponentRef) {
      this.editorComponentRef.destroy();
    }
  }

  public readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (progressEvent) => {
        this.avatar = reader.result;
      };
    }
  }

  public contentChanged(event: ContentChange) {
    this.editorTemplate = event.html;
  }

  public createEditorContent(): void {
    const tmpCmp = Component({template: this.editorTemplate})(class DynamicCmp {
    });
    const tmpModule = NgModule({declarations: [tmpCmp]})(class DynamicModule {
    });

    this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
      .then(factories => {
        const editorComponentFactory = factories.componentFactories[0];
        this.editorComponentRef = this.quillContent.createComponent(editorComponentFactory);
      });
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
