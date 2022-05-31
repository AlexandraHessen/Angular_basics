import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @ViewChild('titleInput') inputRef: ElementRef
  // @ViewChild - дикоратор  + испортируем
  // @ViewChild('titleInput') - обязательно передаем параметр titleInput - это название нашей ссылки через #
  // inputRef - переменная
  // inputRef: ElementRef - тип : ElementRef - те переменные которые мы получаем с помощью декоратора ViewChild имеют специальный тип ElementRef  + испортируем

  constructor() { }

  ngOnInit(): void {
  }

  focusTitle(){
    console.log(this.inputRef);
    // this.inputRef.nativeElement =  тоже самое что мы получаем при document.qurySelector и все методы можем вызывать как обычно
    this.inputRef.nativeElement.focus()
  }

}
