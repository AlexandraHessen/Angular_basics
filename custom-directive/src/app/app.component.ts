import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  condition: boolean=true;
  toggle(){
      this.condition=!this.condition;
  }

  interval$ = interval(1000)
}

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  template: `: {{interval$ | async}}`
})
export class AppComponent {
  interval$ = interval(1000);
}


