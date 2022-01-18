import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TodosFacade } from '@jan-fullstack/core-state';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { TodosComponent } from '../todos.component';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let todosFacade: TodosFacade;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'todos', component: TodosComponent }
        ])
      ],
      declarations: [TodoItemComponent],
      providers: [
        TodosFacade,
        provideMockStore(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 })
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    todosFacade = TestBed.inject(TodosFacade);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should test activated route', () => {
      activatedRoute.params.subscribe((params) => {
        const id = params['id'];
        expect(params).toEqual(id);
      });
    });

    it('should test select', () => {
      jest.spyOn(todosFacade, 'selectTodo');

      todosFacade.selectTodo('123');

      expect(todosFacade.selectTodo).toHaveBeenCalledWith('123');
    });

    it('should test load', () => {
      jest.spyOn(todosFacade, 'loadTodo');

      todosFacade.loadTodo('123');

      expect(todosFacade.loadTodo).toHaveBeenCalledWith('123');
    })
  });

  describe('#ngOnDestroy', () => {
    it('should destroy component', () => {
      jest.spyOn(todosFacade, 'selectTodo');

      component.ngOnDestroy();

      expect(todosFacade.selectTodo).toHaveBeenCalledWith('');
    });
  });

  describe('#goBackToTodos', () => {
    it('should go back to todos', () => {
      const navigateSpy = jest.spyOn(router, 'navigate');

      component.goBackToTodos();

      expect(navigateSpy).toHaveBeenCalledWith(['/todos'])
    });
  });
});
