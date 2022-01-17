import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '@jan-fullstack/api-interfaces';

@Component({
  selector: 'jan-fullstack-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  @Input() todos!: Todo[] | null;
  @Input() loaded = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
