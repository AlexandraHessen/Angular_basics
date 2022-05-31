import { Component, ContentChild, Input, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PostComponent implements OnInit {

  @Input() post: Post
  //post -  название переменной с которой будет работать
  //: Post -  тип Post, interface Post который мв описали в родит компоненте + импортируем его
  // @Input() - дикоратор который говорит что даннаая переменная post будет получена извне + импортируем его

  @ContentChild('info', {static: true}) infoRef: ElementRef
  //infoRef -  название переменной с которой будет работать
  //: ElementRef -  ElementRef - тип : ElementRef - те переменные которые мы получаем с помощью декоратора ContentChild имеют специальный тип ElementRef  + испортируем
  // @ContentChild('info' ) - обязательно передаем параметр info - это название нашей ссылки через #
  // @ContentChild() - дикоратор  + импортируем его
  // {static: true} если используем эту переменную в методе  ngOnInit() ставим true dj всех остальных случаях false

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoRef);
  }

}
