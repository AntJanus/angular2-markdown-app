/// <reference path="../typings/tsd.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View, bootstrap} from 'angular2/angular2';

import * as MarkdownService from './services/markdownService';
import * as LocalStorageService from './services/localStorageService';

@Component({
  selector: 'markdown-app'
})
@View({
  templateUrl: '/app/markdownApp.html'
})
class MarkdownAppComponent {
  private html: string;
  private md: any;

  constructor() {
    this.html = '';
  }

  public updateValue(val) {
    this.html = val;
  }
}

bootstrap(MarkdownAppComponent);
