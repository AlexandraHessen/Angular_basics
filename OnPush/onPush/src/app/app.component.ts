import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hello-component [post]="post"></app-hello-component>
    <button (click)="onClick()">Change title</button>
  `
})
export class AppComponent {
  post = {
    title: 'Hello, world!'
  };

  // onClick() {
  //   this.post.title = 'Hello, Angular!';
  // }
  onClick() {
    this.post = {
      title: 'Hello, Angular!'
    }
  }
}
