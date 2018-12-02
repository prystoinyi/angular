import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() toggle: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }

  onToggle(todo: Todo) {
    this.toggle.emit(todo);
  }


}
