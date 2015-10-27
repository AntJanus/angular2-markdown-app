/// <reference path="../typings/tsd.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View, NgFor, bootstrap} from 'angular2/angular2';

import { MarkdownEditorComponent } from './components/editor/editorComponent';

import { LocalStorageService } from './services/localStorageService';
import { PostService } from './services/postService';

@Component({
  selector: 'markdown-app'
})
@View({
  templateUrl: '/app/markdownApp.html',
  directives: [NgFor, MarkdownEditorComponent]
})
class MarkdownAppComponent {
  public titles: Array<string>;

  constructor(PostService: PostService) {
    this.titles = PostService.getTitles() || [];
  }

  public addPost(title: string) {
    this.titles.push(title);
  }
}

bootstrap(MarkdownAppComponent, [LocalStorageService, PostService]);
