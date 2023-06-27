import { Todoable } from "./todoable.interface";

/**
 *
 *
 * @export
 * @class Todo
 * @implements {Todoable}
 */
export class Todo implements Todoable  {
	id: string;
	title: string;
	completed: boolean;
	parentId: string;
	dateAdded: string = '';
	dateModified: string = '';
	dateCompleted: string = '';

	constructor(
		id: string,
		title: string,
		completed: boolean,
		parentId:string
	) {
		this.id = id;
		this.title = title;
		this.completed = completed;
		this.parentId = parentId;

		this.render();
	}

    render(){
        let todo = document.createElement('li');
		todo.textContent = this.title;
		let todoList = document.getElementById(this.parentId);
		todoList?.appendChild(todo);
        
    }

}
