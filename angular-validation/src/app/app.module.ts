import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormValidationComponent } from './from-validation/form-validation.component';
import { FormsModule } from '@angular/forms';
import { TemplateDirective } from './_helpers/template-directive/template-directive.component';
import { FluentValidationComponent } from './fluent-validation/fluent-validation.component';

@NgModule({
  declarations: [
    AppComponent ,
    FormValidationComponent,
    FluentValidationComponent,
    TemplateDirective
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
