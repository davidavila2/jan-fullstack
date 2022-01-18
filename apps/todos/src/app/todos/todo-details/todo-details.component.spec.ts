import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@jan-fullstack/material';
import { mockTodo, Todo } from '@jan-fullstack/api-interfaces';

import { TodoDetailsComponent } from './todo-details.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


describe('TodoDetailsComponent', () => {
  let component: TodoDetailsComponent;
  let fixture: ComponentFixture<TodoDetailsComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [TodoDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailsComponent);
    component = fixture.componentInstance;
    component.currentTodo = mockTodo;
    component.form = formBuilder.group({
      id: '',
      title: '',
      description: '',
      status: ''
    });
    component.todo = mockTodo;
    component.originalTitle = mockTodo.title;
    component.todoStatuses = [{ label: 'Done', value: 'done' }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#outputs', () => {
    it('shoud test saved', () => {
      component.saved.emit(mockTodo);

      component.saved.subscribe((todo: Todo) => {
        expect(todo).toEqual(mockTodo);
      });
    });

    it('should test cancelled', () => {
      component.cancelled.emit();

      component.cancelled.subscribe(() => {
        expect(component.cancelled).toHaveBeenCalled()
      })
    });
  });
});
