import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <strategy-component [strategy]="strategy"></strategy-component>
    <button (click)="onClick()">Change strategy</button>
  `
})
export class AppComponent {
  strategy = {
    title: 'ChangeDetectionStrategy.Default',
  };

  // onClick() {
  //   this.strategy.title = 'ChangeDetectionStrategy.OnPush';
  // }
  onClick() {
    this.strategy = {
      title: 'ChangeDetectionStrategy.OnPush',
    }
  }
}
