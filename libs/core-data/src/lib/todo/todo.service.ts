import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '@jan-fullstack/api-interfaces';

const BASE_URL = 'http://localhost:3333/api/';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  model = 'todo';

  constructor(private http: HttpClient) { }

  getUrl(): string {
    return `${BASE_URL}${this.model}`;
  };

  getUrlWithId(id: string): string {
    return `${this.getUrl()}/${id}`;
  };

  getOneTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(this.getUrlWithId(id));
  };

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.getUrl());
  };

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.getUrl(), todo);
  };

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(this.getUrlWithId(todo.id), todo);
  };

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(this.getUrlWithId(todo.id));
  };
};
