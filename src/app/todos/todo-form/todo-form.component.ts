import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string = '';
  @Output() create: EventEmitter<string> = new EventEmitter();


  constructor() { }

  onSubmit() {
    this.create.emit(this.title);
  }

  ngOnInit() {
  }

}
