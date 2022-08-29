import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructuralDirective } from './structural.directive';
import { AttributeDirective } from './attribute.directive';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirective,
    AttributeDirective,
    NgTemplateOutletComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
