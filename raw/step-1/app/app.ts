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
  public html: string;
  private md: any;

  constructor() {
    this.html = '';
  }

  public updateValue(val) {
    this.html = val;
  }
}

bootstrap(MarkdownAppComponent);
