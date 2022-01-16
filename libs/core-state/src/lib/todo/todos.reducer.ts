import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TodosActions from './todos.actions';
import { Todo } from '@jan-fullstack/api-interfaces';

export const TODOS_FEATURE_KEY = 'todos';

export interface State extends EntityState<Todo> {
  selectedId?: string | number; // which Todos record has been selected
  loaded: boolean; // has the Todos list been loaded
  error?: string | null; // last known error (if any)
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: State;
}

export const todosAdapter: EntityAdapter<Todo> =
  createEntityAdapter<Todo>();

export const initialState: State = todosAdapter.getInitialState({
  // set initial required properties
  selectedId: undefined,
  loaded: false,
  error: null
});

const onFailure = (state: State, error: any) => ({ ...state, error });

const todosReducer = createReducer(
  initialState,
  on(TodosActions.selectTodo, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(TodosActions.resetTodos, (state) =>
    todosAdapter.removeAll(state)
  ),
  on(
    TodosActions.loadTodo,
    TodosActions.loadTodos,
    TodosActions.createTodo,
    TodosActions.updateTodo,
    TodosActions.deleteTodo,
    (state) => ({
      ...state,
      loaded: false,
      error: null,
    })),
  on(TodosActions.loadTodoSuccess, (state, { todo }) =>
    todosAdapter.addOne(todo, { ...state, loaded: true })
  ),
  on(TodosActions.loadTodosSuccess, (state, { todos }) =>
    todosAdapter.setAll(todos, { ...state, loaded: true })
  ),
  on(TodosActions.createTodoSuccess, (state, { todo }) =>
    todosAdapter.addOne(todo, state)
  ),
  on(TodosActions.updateTodoSuccess, (state, { todo }) =>
    todosAdapter.updateOne({ id: todo.id, changes: todo }, state)
  ),
  on(TodosActions.deleteTodoSuccess, (state, { todo }) =>
    todosAdapter.removeOne(todo.id, { ...state, loaded: true })
  ),
  on(TodosActions.loadTodoFailure, onFailure),
  on(TodosActions.loadTodosFailure, onFailure),
  on(TodosActions.createTodoFailure, onFailure),
  on(TodosActions.updateTodoFailure, onFailure),
  on(TodosActions.deleteTodoFailure, onFailure)
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
