import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionComponent } from './components/condition/condition.component';
import { TdfComponent } from './components/tdf/tdf.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './components/todolist/todolist.component';
import { LoginformComponent } from './components/loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    ConditionComponent,
    TdfComponent,
    RegisterComponent,
    HeroesComponent,
    TodolistComponent,
    LoginformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
