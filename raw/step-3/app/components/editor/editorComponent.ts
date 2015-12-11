import { Component, View, Input, AfterViewInit } from 'angular2/angular2';

import { MarkdownService } from '../../services/markdownService';
import { PostService } from '../../services/postService';

@Component({
  selector: 'markdown-editor',
  bindings: [MarkdownService]
})
@View({
  templateUrl: '/app/components/editor/editorComponent.html'
})
export class MarkdownEditorComponent {
  @Input() title: string;

  public html: string;
  public initVal: string;

  private md: MarkdownService;
  private postService: PostService;

  ngAfterViewInit() {
    var text = this.postService.getPost(this.title);

    this.initVal = text || '';
    this.updateValue(this.initVal);
  }

  constructor(PostService: PostService, MarkdownService: MarkdownService) {
    this.html = '';
    this.md = MarkdownService;
    this.postService = PostService;
  }

  public updateValue(val) {
    this.html = this.md.convert(val);
  }

  public savePost(val) {
    this.postService.savePost(this.title, val);
  }

  public deletePost() {
    this.postService.deletePost(this.title);
  }
}

