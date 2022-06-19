import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hello-component [config]="config"></app-hello-component>
    <button (click)="onClick()">Click</button>
  `
})
export class AppComponent {
  config = {
    position: 'top'
  };

  onClick() {
    this.config.position = 'bottom';
  }
}
