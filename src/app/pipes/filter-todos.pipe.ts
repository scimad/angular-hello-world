import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../models/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Array<ToDo>, searchTerm:string): Array<ToDo> {
    if (!searchTerm)
      return todos;
    const text = searchTerm.toLowerCase();
    return todos.filter(todo=>{
      return todo.title.toLowerCase().includes(searchTerm)
    })
  }

}
