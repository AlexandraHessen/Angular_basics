import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent, //регестрируем компонент
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent] //указываем какой компонент является главным
})
export class AppModule { }
