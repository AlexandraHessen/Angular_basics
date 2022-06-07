import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root', //тег в который будет загружаться компонент
  templateUrl: './app.component.html', //верстка компонента
  styleUrls: ['./app.component.scss'] //стили компонента
})
export class AppComponent implements OnInit {
  form: FormGroup //переменная и ее тип

  ngOnInit(): void {
    this.form = new FormGroup({
      // email: new FormControl("xl@mail", Validators.email)
      email: new FormControl("xl@mail", [Validators.email, Validators.required])
      //Validators.minLength(6)

    })
  }

  submit(){
    console.log('Form sunmited: ', this.form);
  }
}

