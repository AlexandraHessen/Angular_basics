import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  template: `
    <h1>{{post.title}}</h1>
    {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponentComponent {
  @Input() post:any;
  get runChangeDetection() {
    console.log('Checking the view');
    return '';
  }
}
