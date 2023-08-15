import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';//Permite fazer requisições HTTP, Post, Get, Delete...

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';//Permite receber e enviar dados através dos formulários

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
