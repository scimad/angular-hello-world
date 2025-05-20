import { Component, input, output } from '@angular/core';
import { ToDo } from '../../models/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective, TitleCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todoItem = input.required<ToDo>();
  todoItemId = input.required<any>();

  todoToggledOut = output<ToDo>();
  todoClicked() {
    this.todoToggledOut.emit(this.todoItem())
  }

}
