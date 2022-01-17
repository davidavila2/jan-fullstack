import { Injectable } from '@angular/core';
import { Todo } from '@jan-fullstack/api-interfaces'
import { TodoService } from '@jan-fullstack/core-data';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs';

import * as TodosActions from './todos.actions';

@Injectable()
export class TodosEffects {
  loadTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.loadTodo),
    fetch({
      run: (action) => {
        return this.todoService
          .getOneTodo(action.todoId)
          .pipe(
            map((todo: Todo) =>
              TodosActions.loadTodoSuccess({ todo })
            )
          )
      },
      onError: (action, error) => console.log(error)
    })
  ));

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.loadTodos),
    fetch({
      run: () =>
        this.todoService
          .getAllTodos()
          .pipe(
            map((todos: Todo[]) =>
              TodosActions.loadTodosSuccess({ todos })
            )
          ),
      onError: (action, error) => console.log(error)
    })
  ));

  createTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.createTodo),
    pessimisticUpdate({
      run: (action) => this.todoService.createTodo(action.todo).pipe(
        map((todo: Todo) => TodosActions.createTodoSuccess({ todo })
        )
      ),
      onError: (action, error) => console.log(error)
    })
  ));

  updateTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.updateTodo),
    pessimisticUpdate({
      run: (action) => this.todoService.updateTodo(action.todo).pipe(
        map((todo: Todo) => TodosActions.updateTodoSuccess({ todo })
        )
      ),
      onError: (action, error) => console.log(error)
    })
  ));

  deleteTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.deleteTodo),
    pessimisticUpdate({
      run: (action) => this.todoService.deleteTodo(action.todo).pipe(
        map((todo: Todo) => TodosActions.deleteTodoSuccess({ todo })
        )
      ),
      onError: (action, error) => console.log(error)
    })
  ));

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }
}
