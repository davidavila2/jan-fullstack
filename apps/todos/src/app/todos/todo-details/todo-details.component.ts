import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo, STATUS } from '@jan-fullstack/api-interfaces';

@Component({
  selector: 'jan-fullstack-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent {
  @Input() set todo(todo: Todo | undefined | null) {
    if (todo) this.originalTitle = todo.title;
    this.currentTodo = Object.assign({}, todo);
  }
  @Input() form!: FormGroup;

  @Output() saved = new EventEmitter()
  @Output() cancelled = new EventEmitter();

  currentTodo!: Todo;
  originalTitle!: string;
  todoStatuses = STATUS;
}
