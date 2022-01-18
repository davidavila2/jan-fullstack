import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";
import { mockTodo, mockTodos, Todo } from '@jan-fullstack/api-interfaces';
import { MaterialModule } from '@jan-fullstack/material';

import { TodosListComponent } from './todos-list.component';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule
      ],
      declarations: [TodosListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    component.loaded = false;
    component.todos = mockTodos;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('inputs', () => {
    it('should describe loaded', () => {
      expect(component.loaded).toEqual<boolean>(false);
    });

    it('should describe todos', () => {
      expect(component.todos).toEqual<Todo[]>(mockTodos);
    });
  });

  describe('outputs', () => {
    it('should test selected', () => {
      component.selected.emit(mockTodo);

      component.selected.subscribe((todo: Todo) => {
        expect(todo).toEqual<Todo>(mockTodo);
      });
    });

    it('should test deleted', () => {
      component.deleted.emit(mockTodo);

      component.deleted.subscribe((todo: Todo) => {
        expect(todo).toEqual<Todo>(mockTodo);
      });
    });
  });
});
