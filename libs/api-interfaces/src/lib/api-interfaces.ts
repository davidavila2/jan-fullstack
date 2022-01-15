export interface Todo {
  id: string | number; // Primary ID
  title: string;
  description: string;
  status: string;
}

export const emptyTodo = {
  id: null,
  title: '',
  description: '',
  status: null
}

export const STATUS = [
  { label: 'Open', value: 'Open' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Done', value: 'Done' },
]
