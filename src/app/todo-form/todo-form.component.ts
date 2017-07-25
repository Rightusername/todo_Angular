import { Component } from '@angular/core';
import {TodosService} from "../todos.service";
import { Todo } from '../Todo';

@Component({
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.less']
})
export class TodoFormComponent {
  newTodoTitle;

  constructor( private service: TodosService ){

  }

  addTask(e) {
    e.preventDefault();
    let todo = new Todo(this.newTodoTitle);
    this.service.todos.unshift(todo);
    this.service.todos[this.service.todos.indexOf(todo)].newItem = 'active';
    this.newTodoTitle = '';
    setTimeout(function(){
      this.service.todos[this.service.todos.indexOf(todo)].newItem = (this.service.todos[this.service.todos.indexOf(todo)].newItem === 'inactive' ? 'active' : 'inactive');
      this.service.saveData();
    }.bind(this),100);

  }
}
