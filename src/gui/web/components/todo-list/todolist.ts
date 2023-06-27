import { TodoListable } from "./todolistable.interface";
import { Todoable } from "./todoable.interface";
import { Todo } from "./todo";


/**
 *
 *
 * @export
 * @class Todo
 * @implements {Todoable}
 */
export class TodoList implements TodoListable  {
	id: string;
	title: string;
	parentId: string;
	

	constructor(
		id: string,
		title: string,
		parentId:string,
	) {
		this.id = id;
		this.title = title;
		this.parentId = parentId;

        this.render();
	}

    render(){
        let todoList = document.createElement('ul');
        todoList.id = this.id;
		let todoListContainer = document.getElementById(this.parentId);
		todoListContainer?.appendChild(todoList);
        new Todo('myTodo', 'Study Chapter 1', false, this.id);
        
    }

}
