import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'strategy-component',
  template: `
    <h1>{{strategy.title}}</h1>
    {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StrategyComponent {
  @Input() strategy:any;
  get runChangeDetection() {
    console.log('Checking the view');
    return '';
  }
}
