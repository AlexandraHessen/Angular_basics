import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //тег в который будет загружаться компонент
  templateUrl: './app.component.html', //верстка компонента
  styleUrls: ['./app.component.scss'] //стили компонента
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr =[1, 2, 3];
  obj = {a:1, b:2}

  img = "https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"

  constructor(){
    setTimeout(()=>{
      this.img="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
    }, 5000

    )
  }

}
