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
import { MaterialModule } from '@jan-fullstack/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

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
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
