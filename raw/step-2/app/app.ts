/// <reference path="../typings/tsd.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View, bootstrap} from 'angular2/angular2';

import { MarkdownService } from './services/markdownService';
import { LocalStorageService } from './services/localStorageService';

@Component({
  selector: 'markdown-app',
  bindings: [MarkdownService]
})
@View({
  templateUrl: '/app/markdownApp.html'
})
class MarkdownAppComponent {
  public html: string;
  public initVal: string;

  private md: MarkdownService;
  private localStorage: LocalStorageService;
  private storageKey: string = 'markdown-app';

  constructor(LocalStorageService: LocalStorageService, MarkdownService: MarkdownService) {
    this.localStorage = LocalStorageService;
    this.html = '';
    this.md = MarkdownService;

    var text = this.localStorage.retrieve(this.storageKey);
    this.initVal = text ? text.text : '';

    this.updateValue(this.initVal);
  }

  public updateValue(val) {
    this.html = this.md.convert(val);
  }

  public save(val) {
    this.localStorage.store(this.storageKey, { text: val });
  }
}

bootstrap(MarkdownAppComponent, [LocalStorageService]);
