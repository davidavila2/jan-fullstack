import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  {
    path: 'todos/:id',
    component: TodoItemComponent,
  },
  { path: '**', redirectTo: 'todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
