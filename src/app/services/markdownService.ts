import { Injectable } from 'angular2/angular2';

import * as marked from 'marked';

interface IMarkdownConfig {
  sanitize?: boolean,
  gfm?: boolean,
  breaks?: boolean,
  smartypants?: boolean
}

@Injectable()
export class MarkdownService {
  private md: MarkedStatic;

  constructor(config: IMarkdownConfig) {
    marked.setOptions(config);
    this.md = marked;
  }

  convert(markdown: string): string {
    return this.md.parse(markdown);
  }

}
