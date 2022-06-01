import { Component, OnInit } from '@angular/core';

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

export class AppComponent implements OnInit{
  posts: Post[] =[         //Post[] тип - массив объектов класса Post
    {title: 'Хочу выучить ', text: 'Я все еще', id: 1},
    {title: 'Следующий блок', text: 'Будет про', id: 2}
  ]

  ngOnInit(): void {
    setTimeout(()=>{
      console.log("Timeout");
      // this.posts[0].title = "change"
      this.posts[0]={
        title: "change",
        text: "change",
        id: 33
      }
    }, 5000

    )
  }


}
