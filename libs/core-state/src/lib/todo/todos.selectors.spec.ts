import { Todo } from '@jan-fullstack/api-interfaces';
import { todosAdapter, TodosPartialState, initialState } from './todos.reducer';
import * as TodosSelectors from './todos.selectors';

describe('Todos Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTodosId = (it: Todo) => it.id;
  const createTodo = (id: string, name = '') =>
  ({
    id,
    title: name || `name-${id}`,
  } as Todo);

  let state: TodosPartialState;

  beforeEach(() => {
    state = {
      todos: todosAdapter.setAll(
        [
          createTodo('PRODUCT-AAA'),
          createTodo('PRODUCT-BBB'),
          createTodo('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Todos Selectors', () => {
    it('getAllTodos() should return the list of Todos', () => {
      const results = TodosSelectors.getAllTodos(state);
      const selId = getTodosId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TodosSelectors.getSelected(state) as Todo;
      const selId = getTodosId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getTodosLoaded() should return the current "loaded" status', () => {
      const result = TodosSelectors.getTodosLoaded(state);

      expect(result).toBe(true);
    });

    it('getTodosError() should return the current "error" state', () => {
      const result = TodosSelectors.getTodosError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
