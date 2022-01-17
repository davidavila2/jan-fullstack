import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '@jan-fullstack/api-interfaces';
import { TodosFacade } from '@jan-fullstack/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'jan-fullstack-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  form!: FormGroup;
  selectedTodo$ = this.todosFacade.selectedTodo$;
  loaded$ = this.todosFacade.loaded$
  todos$: Observable<Todo[]> = this.todosFacade.allTodos$;

  constructor(
    private todosFacade: TodosFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.todosFacade.loadTodos();
    this.todosFacade.mutations$.subscribe(() => this.resetTodos());
  };

  resetTodos(): void {
    this.form.reset();
    this.selectTodo({} as Todo);
  };

  selectTodo(todo: Todo): void {
    this.todosFacade.selectTodo(todo.id);
    this.form.patchValue(todo);
  };

  create(): void {
    this.todosFacade.createTodo(this.form.value);
  };

  update(): void {
    this.todosFacade.updateTodo(this.form.value);
  };

  save(todo: Todo): void {
    todo.id ? this.update() : this.create();
  };

  delete(todo: Todo): void {
    this.todosFacade.deleteTodo(todo);
  };

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]
    });
  };
};
