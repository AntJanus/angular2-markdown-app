import { Component, View, NgFor } from 'angular2/angular2';

import { MarkdownEditorComponent } from '../editor/editorComponent';

import { LocalStorageService } from '../../services/localStorageService';
import { PostService } from '../../services/postService';

@Component({
  selector: 'post-list'
})
@View({
  templateUrl: '/app/component/post-list/postListComponent.html',
  directives: [NgFor, MarkdownEditorComponent]
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
