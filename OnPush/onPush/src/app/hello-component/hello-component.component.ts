import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  template: `
    <h1>{{config.position}}</h1>
    {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponentComponent {
  @Input() config:any;
  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}
