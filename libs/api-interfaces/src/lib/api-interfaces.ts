export interface Todo {
  id: string; // Primary ID
  title: string;
  description: string;
  status: string;
};

export const emptyTodo = {
  id: '',
  title: '',
  description: '',
  status: ''
};

export const STATUS = [
  { label: 'Open', value: 'Open' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Done', value: 'Done' },
];

// Testing Utils
export const mockTodo: Todo = {
  id: 'mockId',
  title: 'mock',
  description: 'mock description',
  status: 'mock status'
};

export const formReset: Todo = {
  id: '',
  title: '',
  description: '',
  status: ''
}

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

export interface Message {
  message: string;
}
