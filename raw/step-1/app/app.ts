/// <reference path="../typings/tsd.d.ts" />

import 'angular2/bundles/angular2-polyfills';

import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: 'markdown-app',
  templateUrl: '/app/markdownApp.html'
})
class MarkdownAppComponent {
  public html = '';
  private md: any;

  constructor() {
  }

  public updateValue(val:string) {
    this.html = val;
  }
}

bootstrap(MarkdownAppComponent);
