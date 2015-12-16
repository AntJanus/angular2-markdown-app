/// <reference path="../typings/tsd.d.ts" />

import 'angular2/bundles/angular2-polyfills';

import { Component } from 'angular2/core';

import { bootstrap } from 'angular2/platform/browser';

import { MarkdownService } from './services/markdown.service';
import { LocalStorageService } from './services/localStorage.service';

@Component({
  selector: 'markdown-app',
  templateUrl: '/app/markdownApp.html',
  bindings: [MarkdownService]
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
