/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/showdown/showdown.d.ts" />
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

  constructor() {
    this.html = '';
  }

  public updateValue(val) {
    this.html = val;
  }
}

bootstrap(MarkdownAppComponent);
