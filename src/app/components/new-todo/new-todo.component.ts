import { Component, OnInit } from '@angular/core';
import {Todo} from '../../type/todo';
import {TodoDataService} from '../../service/todo-data.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  editTodo(todo) {
    this.todoDataService.editTodo(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
