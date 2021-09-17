import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList = '';

  constructor() {}

  ngOnInit(): void {}

  onEditTodo(): void {
    this.todoList = 'Studying in the evening';
  }

  onUpdateTodoName(event: Event): void {
    this.todoList = (<HTMLInputElement>event.target).value;
  }
}
