import { Todo } from './Todo';


export class TodosService {
    todos = JSON.parse(localStorage.getItem('todos')) || [new Todo('Купить помидоры', true),
          new Todo('Помыть огурцы', false)
    ];

    saveData(){
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}
