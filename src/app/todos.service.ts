import { Todo } from './Todo';


export class TodosService {
    _todos = JSON.parse(localStorage.getItem('todos')) || [new Todo('Купить помидоры', true),
          new Todo('Помыть огурцы', false)
    ];

	  get todos() {
		return this._todos;
	  }


    saveData(){
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}
