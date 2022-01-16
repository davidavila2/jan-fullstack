import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreDataModule } from '@jan-fullstack/core-data';
import { CoreStateModule } from '@jan-fullstack/core-state';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosListComponent,
    TodoDetailsComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
