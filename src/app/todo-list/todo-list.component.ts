import { Component } from '@angular/core';
import {TodosService} from "../todos.service";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.less'],
    animations: [

        trigger('focusPanel', [
            state('inactive', style({

            })),
            state('active', style({
              height: '0px',
              padding: '0px',
              width: '0px',
              border: '0px',
              transform: 'scale(0)',
            })),
            transition('inactive => active', animate('300ms ease')),
            transition('active => inactive', animate('300ms ease'))
        ]),

        trigger('addItem', [
            state('active', style({
              height: '0px',
              padding: '0px',
              overflow: 'hidden',
              border: '0',
              width: '0',

            })),
            state('inactive', style({
              width: '100%',
            })),
            transition('inactive => active', animate('200ms ease')),
            transition('active => inactive', animate('200ms ease'))
        ])

    ]
})
export class TodoListComponent {

    constructor( private service: TodosService ){

    }

    getTodos(){
      return this.service.todos;
    }

    completeTask(todo) {
      todo.completed = !todo.completed;
      this.service.saveData();
    }

    deleteTask(todo) {
        setTimeout(function(this){
            if (this.service.todos.indexOf(todo) > -1) {
              this.service.todos.splice(this.service.todos.indexOf(todo), 1);
              this.service.saveData();
            }
        }.bind(this),300);
        todo.deleted = (todo.deleted === 'inactive' ? 'active' : 'inactive');
    }
}
