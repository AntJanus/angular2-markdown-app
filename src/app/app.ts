/// <reference path="../typings/tsd.d.ts" />

import 'angular2/bundles/angular2-polyfills';

import { Component, View, provide } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';

import { APP_BASE_HREF, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouteParams, Location } from 'angular2/router';

import { LocalStorageService } from './services/localStorage.service';
import { PostService } from './services/post.service';

//pages
import { PostListComponent } from './components/post-list/postList.component';
import { PostComponent } from './components/post/post.component';

@Component({
  selector: 'app',
  templateUrl: '/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: PostListComponent, as: 'PostList' },
  { path: '/post/:name', component: PostComponent, as: 'Post' }
])
class App {
}

bootstrap(App, [LocalStorageService, PostService, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
