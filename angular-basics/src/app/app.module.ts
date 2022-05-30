import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent, //регестрируем компонент
    PostComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //указываем какой компонент является главным
})
export class AppModule { }
