import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  constructor() { }

  onToggle() {
    this.toggle.emit(this.todo);
  }

  onDelete() {
    this.delete.emit(this.todo);
  }

  ngOnInit() {
  }

}
