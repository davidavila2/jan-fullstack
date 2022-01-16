import { createAction, props } from '@ngrx/store';
import { Todo } from '@jan-fullstack/api-interfaces';

export const resetTodos = createAction('[Todos] Reset Todos');

// Select Todo
export const selectTodo = createAction(
  '[Todos] Select Todo',
  props<{ selectedId: string }>()
);

export const TodoSelected = createAction(
  '[Todos] Todo Selected',
  props<{ todo: Todo }>()
);

// Load Todos
export const loadTodos = createAction('[Todos] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure',
  props<{ error: string }>()
);

// Load Todo
export const loadTodo = createAction(
  '[Todos] Load Todo',
  props<{ todoId: string }>()
);

export const loadTodoSuccess = createAction(
  '[Todos] Load Todo Success',
  props<{ todo: Todo }>()
);

export const loadTodoFailure = createAction(
  '[Todos] Load Todo Failure',
  props<{ error: string }>()
);

// Create Todo
export const createTodo = createAction(
  '[Todos] Create Todo',
  props<{ todo: Todo }>()
);

export const createTodoSuccess = createAction(
  '[Todos] Create Todo Success',
  props<{ todo: Todo }>()
);

export const createTodoFailure = createAction(
  '[Todos] Create Todo Failure',
  props<{ error: string }>()
);

// Update Todo
export const updateTodo = createAction(
  '[Todos] Update Todo',
  props<{ todo: Todo }>()
);

export const updateTodoSuccess = createAction(
  '[Todos] Update Todo Success',
  props<{ todo: Todo }>()
);

export const updateTodoFailure = createAction(
  '[Todos] Update Todo Failure',
  props<{ error: string }>()
);

// Delete Todo
export const deleteTodo = createAction(
  '[Todos] Delete Todo',
  props<{ todo: Todo }>()
);

export const deleteTodoCancelled = createAction(
  '[Todos] Delete Todo Cancelled'
);

export const deleteTodoSuccess = createAction(
  '[Todos] Delete Todo Success',
  props<{ todo: Todo }>()
);

export const deleteTodoFailure = createAction(
  '[Todos] Delete Todo Failure',
  props<{ error: string }>()
);
