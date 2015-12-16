import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { LocalStorageService } from '../../services/localStorage.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'post-list',
  templateUrl: '/app/components/post-list/postList.component.html',
  directives: [ROUTER_DIRECTIVES, NgFor]
})
export class PostListComponent {
  public titles: Array<string>;

  constructor(PostService: PostService) {
    this.titles = PostService.getTitles() || [];
  }

  public addPost(title: string) {
    this.titles.push(title);
  }
}
