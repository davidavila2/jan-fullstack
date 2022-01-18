import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Todo, mockTodo } from '@jan-fullstack/api-interfaces';
import { TodosFacade } from '@jan-fullstack/core-state';
import { MaterialModule } from '@jan-fullstack/material';
import { provideMockStore } from '@ngrx/store/testing';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodosListComponent } from './todos-list/todos-list.component';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let todosFacade: TodosFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        TodosFacade,
        provideMockStore(),
        { provide: FormBuilder, useValue: formBuilder }
      ],
      declarations: [
        TodosComponent,
        TodosListComponent,
        TodoDetailsComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    todosFacade = TestBed.inject(TodosFacade);
    component.form = formBuilder.group({
      id: null,
      title: '',
      description: '',
      status: ''
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#reset', () => {
    it('should reset todos', () => {
      component.form.patchValue(mockTodo);

      component.form.reset();

      expect(component.form.value).toEqual({
        "description": null,
        "id": null,
        "status": null,
        "title": null,
      });
    });

    it('should select', () => {
      jest.spyOn(component, 'selectTodo');

      component.selectTodo({} as Todo);

      expect(component.selectTodo).toBeCalledWith({} as Todo);
    })
  });

  describe('#select', () => {
    it('should select', () => {
      jest.spyOn(todosFacade, 'selectTodo')

      todosFacade.selectTodo(mockTodo.id);

      expect(todosFacade.selectTodo).toBeCalledWith(mockTodo.id)
    });

    it('should patch form', () => {
      component.form.patchValue(mockTodo);

      expect(component.form.value).toEqual(mockTodo)
    });
  });

  describe('#create', () => {
    it('should create', () => {
      jest.spyOn(todosFacade, 'createTodo');

      todosFacade.createTodo(mockTodo);

      expect(todosFacade.createTodo).toHaveBeenCalledWith(mockTodo);
    });
  });

  describe('#update', () => {
    it('should udpate', () => {
      jest.spyOn(todosFacade, 'updateTodo');

      todosFacade.updateTodo(mockTodo);

      expect(todosFacade.updateTodo).toHaveBeenCalledWith(mockTodo);
    });
  });

  describe('#save', () => {
    const newTodo = { id: '', title: 'title', description: 'desc', status: 'stat' };
    const todo = { id: '1', title: 'title', description: 'desc', status: 'stat' };
    it('should update if id is present', () => {
      jest.spyOn(component, 'update');

      component.save(todo)

      expect(component.update).toHaveBeenCalled()
    });

    it('should create if id is not present', () => {
      jest.spyOn(component, 'create');

      component.save(newTodo)

      expect(component.create).toHaveBeenCalled()
    });
  });

  describe('#delete', () => {
    it('should delete', () => {
      jest.spyOn(todosFacade, 'deleteTodo');

      component.delete(mockTodo);

      expect(todosFacade.deleteTodo).toBeCalledWith(mockTodo);
    });
  });
});
