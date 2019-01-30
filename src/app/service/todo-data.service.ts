import {Injectable} from '@angular/core';
import {Todo} from '../type/todo';


@Injectable()
export class TodoDataService {

  lastId = 0;

  todos: Todo[] = [];

  constructor() {
    if(localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  }

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    };
    this.savetoDoList();
    console.log('todos', this.todos);
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
  editTodo(todo: Todo){
    let edittodo = this.updateTodoById(todo.id, { title: todo.title});
    return edittodo;
  }

  savetoDoList(){
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log('..');
  }

}
