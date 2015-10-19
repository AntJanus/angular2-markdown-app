/// <reference path="../typings/tsd.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import * as marked from 'marked';

import {Component, View, bootstrap} from 'angular2/angular2';

console.log(marked, 'marked');

@Component({
  selector: 'markdown-app'
})
@View({
  templateUrl: '/app/markdownApp.html'
})
class MarkdownAppComponent {
  public html: string;
  private md: any;

  constructor() {
    this.html = '';
    this.md = marked;
  }

  public updateValue(val) {
    this.html = marked.parse(val);
  }
}

bootstrap(MarkdownAppComponent);
