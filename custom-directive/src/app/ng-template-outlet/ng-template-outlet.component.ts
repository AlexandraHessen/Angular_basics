import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-ng-template-outlet',
//   templateUrl: './ng-template-outlet.component.html',
//   styleUrls: ['./ng-template-outlet.component.css']
// })
// export class NgTemplateOutletComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

@Component({
  selector: 'app-ng-template-outlet',
  template: `
    <ng-container *ngTemplateOutlet="greet"></ng-container>
    <hr>
    <ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>
    <hr>
    <ng-container *ngTemplateOutlet="svk; context: myContext"></ng-container>
    <hr>
    <ng-container *ngTemplateOutlet="eng2; context: myContext2"></ng-container>
    <hr>

    <ng-template #greet><span>Hello</span></ng-template>
    <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
    <ng-template #svk let-person="localSk"><span>Ahoj {{person}}!</span></ng-template>
    <ng-template #eng2 let-age><span>Hello {{age}}!</span></ng-template>
`
})
export class NgTemplateOutletComponent {
  myContext = {$implicit: 'World', localSk: 'Svet'};

  myContext2 = {$implicit: '22'};

// Hello
// Hello World!
// Ahoj Svet!
}
