import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockTodo, mockTodos, Todo, updatedMockTodo } from '@jan-fullstack/api-interfaces';
import { of } from 'rxjs';

describe('TodoService', () => {
  let service: TodoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    });
    service = TestBed.inject(TodoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getUrl', () => {
    it('should get the url', () => {
      jest.spyOn(service, 'getUrl').mockImplementation(() => 'www.some-url.com');

      const url: string = service.getUrl();

      expect(url).toEqual('www.some-url.com');
    });
  });

  describe('#getUrlWithId', () => {
    it('should get url with id', () => {
      jest.spyOn(service, 'getUrlWithId').mockImplementation(() => 'www.some-url.com/1');

      const id = '1';

      const urlWithId: string = service.getUrlWithId(id);

      expect(urlWithId).toEqual('www.some-url.com/1')
    });
  });

  describe('#getOneTodo', () => {
    it('should get one todo', () => {
      service.getOneTodo(mockTodo.id).subscribe((todo: Todo) => {
        expect(todo).toStrictEqual<Todo>(mockTodo);
      });

      const req = httpTestingController.expectOne('http://localhost:3333/api/todo/mockId');

      req.flush(mockTodo);
      expect(req.request.method).toBe('GET');

      httpTestingController.verify();
    });
  });

  describe('#getAllTodos', () => {
    it('should get all todos', () => {
      service.getAllTodos().subscribe();

      const req = httpTestingController.expectOne('http://localhost:3333/api/todo');

      req.flush(mockTodos);
      expect(req.request.method).toBe('GET');

      httpTestingController.verify();
    });
  });

  describe('#createTodo', () => {
    it('should create a todo', () => {
      service.createTodo(mockTodo).subscribe((todo: Todo) => {
        expect(todo).toStrictEqual<Todo>(mockTodo);
      });

      const req = httpTestingController.expectOne('http://localhost:3333/api/todo');

      req.flush(mockTodo);
      expect(req.request.method).toBe('POST');

      httpTestingController.verify();
    });
  });

  describe('#updateTodo', () => {
    it('should update a todo', () => {
      service.updateTodo(mockTodo).subscribe((todo: Todo) => {
        expect(todo).toStrictEqual<Todo>(mockTodo);
      });

      const req = httpTestingController.expectOne('http://localhost:3333/api/todo/mockId');

      req.flush(mockTodo);
      expect(req.request.method).toBe('PATCH');

      httpTestingController.verify();
    });
  });

  describe('#deleteTodo', () => {
    it('should delete a todo', () => {
      service.deleteTodo(mockTodo).subscribe((todo: Todo) => {
        expect(todo).toStrictEqual<Todo>(mockTodo);
      });

      const req = httpTestingController.expectOne('http://localhost:3333/api/todo/mockId');

      req.flush(mockTodo);
      expect(req.request.method).toBe('DELETE');

      httpTestingController.verify();
    });
  });
});
