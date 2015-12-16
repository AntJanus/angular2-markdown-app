import { Component, View } from 'angular2/core';

import { RouteParams } from 'angular2/router';

import { MarkdownEditorComponent } from '../editor/editor.component';

@Component({
  selector: 'post',
  templateUrl: '/app/components/post/post.component.html',
  directives: [MarkdownEditorComponent]
})
export class PostComponent {
  public title: string;

  constructor(routeParams: RouteParams) {
    this.title = <string> routeParams.get('name');
  }
}
