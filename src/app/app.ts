/// <reference path="../typings/angular2/angular2.d.ts" />
import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'markdown-app'
})
@View({
  templateUrl: '/app/markdownApp.html'
})
class MarkdownAppComponent {

  constructor() {
  }
}

bootstrap(MarkdownAppComponent);
