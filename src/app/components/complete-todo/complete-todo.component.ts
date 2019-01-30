import { Component, OnInit } from '@angular/core';
import {Todo} from '../../type/todo';
import {TodoDataService} from '../../service/todo-data.service';

@Component({
  selector: 'app-complete-todo',
  templateUrl: './complete-todo.component.html',
  styleUrls: ['./complete-todo.component.css']
})
export class CompleteTodoComponent implements OnInit {

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
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
