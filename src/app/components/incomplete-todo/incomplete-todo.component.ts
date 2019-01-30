import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../../service/todo-data.service';

@Component({
  selector: 'app-incomplete-todo',
  templateUrl: './incomplete-todo.component.html',
  styleUrls: ['./incomplete-todo.component.css']
})
export class IncompleteTodoComponent implements OnInit {

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
