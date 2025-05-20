import { Component, input } from '@angular/core';
import { ToDo } from '../../models/todo.type';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todoItem = input.required<ToDo>();
  todoItemId = input.required<any>();
}
