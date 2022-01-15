import { Todo } from "./entities/todo.entity";

export const mockTodo: Todo = {
  id: 'mockId',
  title: 'mock',
  description: 'mock description',
  status: 'mock status'
};

export const updatedMockTodo: Todo = {
  id: 'updated mockId',
  title: 'updated mock',
  description: 'updated mock description',
  status: 'updated mock status'
};

export const mockTodos: Todo[] = [
  {
    id: 'mockId',
    title: 'mock',
    description: 'mock description',
    status: 'mock status'
  },
  {
    id: 'mockId2',
    title: 'mock2',
    description: 'mock description2',
    status: 'mock status2'
  }
];
