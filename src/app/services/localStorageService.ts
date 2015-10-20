import { Injectable } from 'angular2/angular2';

interface ILocalStorageConfig {
  localKey: string
}

@Injectable()
export class LocalStorageService {
  private key: string;
  private storage: any;

  constructor(config: ILocalStorageConfig) {
    this.key = config.localKey;
    this.storage = localStorage;
  }

  public getPost(): string {
    return this.storage[this.key];
  }

  public savePost(markdown: string): boolean {
    this.storage[this.key] = markdown;
    return true;
  }

}
