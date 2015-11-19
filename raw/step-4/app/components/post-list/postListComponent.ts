import { Component, View, NgFor } from 'angular2/angular2';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { LocalStorageService } from '../../services/localStorageService';
import { PostService } from '../../services/postService';

@Component({
  selector: 'post-list'
})
@View({
  templateUrl: '/app/components/post-list/postListComponent.html',
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
