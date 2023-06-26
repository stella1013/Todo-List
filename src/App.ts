
//
/**
 *
 *
 * @export
 * @class App

 */
export class App {
	public todoData = ['todo 1', 'todo 2', 'todo 3'];

	constructor() {	
		this.init();
	}

	init(){
		 let appContainer = document.getElementById('app')!;
		 let todoList = document.createElement('ol');
		 todoList.id = 'todo-list';
		 appContainer.appendChild(todoList);

		 /* if there are todos to show, show them */
		 if(this.todoData.length > 0){
			let todoList = document.getElementById('todo-list');
			if(todoList){
				let todo = document.createElement('li');
				todo.textContent = 'Todo 1';
				todoList.appendChild(todo);
			}
		 }
		 
		 
	}
	
}


