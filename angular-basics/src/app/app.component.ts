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
  color: 5;

  car: string = 'Audi'

  cars: any[] = [
    {name: 'Audi', year: 2018},
    {name: 'BMW', year: 2015},
    {name: 'Mercedes', year: 2016}
  ];

  
  elementStyles: any = {
    color: 'red',
    opacity: 0.5,
  }


  img = "https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"

  inputValue="";

  val="test";

  backgroundToggle = false

  toggle = false

  arrNumber = [1, 1, 2, 3, 5, 8]

  objs=[
    {title: 'Post 1 ', author: 'Vladilen', comments: [
      {name: 'Max', text: 'lorem 1'},
      {name: 'Max', text: 'lorem 2'},
      {name: 'Max', text: 'lorem 3'},
    ]},
    {title: 'Post 2 ', author: 'Vladilen2', comments: [
      {name: 'Max2', text: 'lorem 1'},
      {name: 'Max2', text: 'lorem 2'},
      {name: 'Max2', text: 'lorem 3'},
    ]}

  ]

  now:Date = new Date()

  constructor(){
    setTimeout(()=>{
      this.img="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
    }, 5000

    )
  }

  // onInput(event:any){
  //   console.log(event);
  //   this.inputValue = event.target.value
  // }

  onInput(event:Event){
    this.inputValue = (<HTMLInputElement>event.target).value

  }

  onClick(){
    console.log("click");
  }

  onBlur(str: string){
    this.inputValue = str
  }

  inputTest(event:Event){
    console.log(event);
    this.val=(<HTMLInputElement>event.target).value



  }



}
