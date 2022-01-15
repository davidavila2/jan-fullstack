import { createAction, props } from '@ngrx/store';
import { Todo } from '@jan-fullstack/api-interfaces';

export const init = createAction('[Todos Page] Init');

export const loadTodosSuccess = createAction(
  '[Todos/API] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos/API] Load Todos Failure',
  props<{ error: any }>()
);
