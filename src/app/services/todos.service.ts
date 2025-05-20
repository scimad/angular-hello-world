import { inject, Injectable } from '@angular/core';
import { ToDo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {
  http = inject(HttpClient);

  todoItems: Array<ToDo> = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: true,
      userId: 1
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: true,
      userId: 1
    },
    {
      id: 3,
      title: 'Learn JS',
      completed: true,
      userId: 1
    },
    {
      id: 4,
      title: 'Learn HTML/CSS',
      completed: true,
      userId: 1
    }    
  ];

  getoTodosFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Array<ToDo>>(url);
  }

  constructor() { }
}
