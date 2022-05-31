import { Component } from '@angular/core';

export interface Post{
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root', //тег в который будет загружаться компонент
  templateUrl: './app.component.html', //верстка компонента
  styleUrls: ['./app.component.scss'] //стили компонента
})
export class AppComponent {
  posts: Post[] =[         //Post[] тип - массив объектов класса Post
    {title: 'Хочу выучить ', text: 'Я все еще', id: 1},
    {title: 'Следующий блок', text: 'Будет про', id: 2}
  ]


}
