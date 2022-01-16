import { Injectable } from '@angular/core';
import { Todo } from '@jan-fullstack/api-interfaces';
import { select, Store, Action, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs';

import * as TodosActions from './todos.actions';
import * as TodosFeature from './todos.reducer';
import * as TodosSelectors from './todos.selectors';

@Injectable()
export class TodosFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(TodosSelectors.getTodosLoaded));
  allTodos$ = this.store.pipe(select(TodosSelectors.getAllTodos));
  selectedTodos$ = this.store.pipe(select(TodosSelectors.getSelected));
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        action.type === TodosActions.createTodo({} as any).type ||
        action.type === TodosActions.updateTodo({} as any).type ||
        action.type === TodosActions.deleteTodo({} as any).type
    )
  );

  constructor(
    private readonly store: Store<TodosFeature.TodosPartialState>,
    private actions$: ActionsSubject
  ) { }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  selectTodo(selectedId: string) {
    this.dispatch(TodosActions.selectTodo({ selectedId }));
  }

  loadTodos() {
    this.dispatch(TodosActions.loadTodos());
  }

  loadTodo(todoId: string) {
    this.dispatch(TodosActions.loadTodo({ todoId }));
  }

  createTodo(todo: Todo) {
    this.dispatch(TodosActions.createTodo({ todo }));
  }

  updateTodo(todo: Todo) {
    this.dispatch(TodosActions.updateTodo({ todo }));
  }

  deleteTodo(todo: Todo) {
    this.dispatch(TodosActions.deleteTodo({ todo }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
