/// <reference path="../typings/tsd.d.ts" />

import 'zone.js';
import 'reflect-metadata';

import { Component, View, NgFor, bootstrap } from 'angular2/angular2';
import { ROUTER_BINDINGS, ROUTER_DIRECTIVES, RouteConfig, RouteParams } from 'angular2/router';

import { LocalStorageService } from './services/localStorageService';
import { PostService } from './services/postService';

//pages
import { PostListComponent } from './components/post-list/postListComponent';

@Component({
  selector: 'app'
})
@View({
  templateUrl: '/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: PostListComponent, as: 'PostList' }
  //{ path: '/post/:name', component: PostComponent, as: 'Post' }
])
class App {
}

bootstrap(App, [LocalStorageService, PostService, ROUTER_BINDINGS]);
