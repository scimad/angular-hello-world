import { Component, inject, OnInit, signal } from '@angular/core';
import { ToDosService } from '../services/todos.service';
import { ToDo } from '../models/todo.type';
import { catchError, throwError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [NgIf, TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todosService = inject(ToDosService);
  todoItems = signal<Array<ToDo>>([]);
  todoItemsfromAPI = signal<Array<ToDo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoItems.set(this.todosService.todoItems)

    this.todosService.getoTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log('Oops! Error: ', err);
          return throwError(() => new Error(err));
        })
      )
      .subscribe((todos)=>{
        this.todoItemsfromAPI.set(todos);
      });
  }

  updateToDoItem(todoItem: ToDo) {
    this.todoItemsfromAPI.update((todos) => {
      return todos.map(todo => 
        todo.id === todoItem.id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      );
    });
  }
}
