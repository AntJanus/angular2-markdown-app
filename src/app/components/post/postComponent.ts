import { Component, View } from 'angular2/angular2';

import { RouteParams } from 'angular2/router';

import { MarkdownEditorComponent } from '../editor/editorComponent';

@Component({
  selector: 'post'
})
@View({
  templateUrl: '/app/components/post/postComponent.html',
  directives: [MarkdownEditorComponent]
})
export class PostComponent {
  public title: string;

  constructor(routeParams: RouteParams) {
    this.title = <string> routeParams.params.name;
  }
}
