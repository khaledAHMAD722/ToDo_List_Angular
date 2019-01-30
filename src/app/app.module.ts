import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { IncompleteTodoComponent } from './components/incomplete-todo/incomplete-todo.component';
import { CompleteTodoComponent } from './components/complete-todo/complete-todo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    IncompleteTodoComponent,
    CompleteTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
