import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from '@jan-fullstack/api-interfaces';
import { TodosFacade } from '@jan-fullstack/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'jan-fullstack-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnDestroy {
  todo$: Observable<Todo | undefined> = this.todosFacade.selectedTodo$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosFacade: TodosFacade
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      const id = param['id'];
      this.todosFacade.selectTodo(id);
      this.todosFacade.loadTodo(id);
    });
  };

  ngOnDestroy() {
    this.todosFacade.selectTodo('');
  };

  goBackToTodos() {
    this.router.navigate(['/todos']);
  };
};
