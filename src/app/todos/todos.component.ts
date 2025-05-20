import { Component, inject, OnInit, signal } from '@angular/core';
import { ToDosService } from '../services/todos.service';
import { ToDo } from '../models/todo.type';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todosService = inject(ToDosService);
  todoItems = signal<Array<ToDo>>([]);
  todofromAPI = signal<Array<ToDo>>([]);

  ngOnInit(): void {
    this.todoItems.set(this.todosService.todoItems)

    this.todosService.getoTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log('Oops! Error: ',);
          return throwError(() => new Error(err));
        })
      )
      .subscribe((todos)=>{
        this.todofromAPI.set(todos);
      });
  }

}
