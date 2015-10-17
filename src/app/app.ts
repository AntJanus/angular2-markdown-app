/// <reference path="../typings/tsd.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import * as showdown from 'showdown';

import {Component, View, bootstrap} from 'angular2/angular2';

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
    this.md = showdown.Converter();
  }

  public updateValue(val) {
    this.html = this.md.makeHtml(val);
  }
}

bootstrap(MarkdownAppComponent);
