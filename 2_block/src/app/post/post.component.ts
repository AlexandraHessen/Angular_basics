import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  //post -  название переменной с которой будет ра
  //: Post -  тип Post, interface Post который мв описали в родит компоненте + импортируем его
  // @Input() - дикоратор который говорит что даннаая переменная post будет получена извне + импортируем его

  constructor() { }

  ngOnInit(): void {
  }

}
