import { Component, View, Input, AfterViewInit } from 'angular2/core';

import { MarkdownService } from '../../services/markdown.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'markdown-editor',
  bindings: [MarkdownService],
  templateUrl: '/app/components/editor/editor.component.html'
})
export class MarkdownEditorComponent {
  @Input() title: string;

  public html: string;
  public initVal: string;

  private md: MarkdownService;
  private postService: PostService;

  afterViewInit() {
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

