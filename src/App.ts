import { TodoList } from "./gui/web/components/todo-list/todolist";
import { TodoListable } from "./gui/web/components/todo-list/todolistable.interface";

/**
 *
 *
 * @export
 * @class App

 */
export class App {
  public todoList: TodoListable;

  constructor() {
    this.todoList = new TodoList("myList", "Todo Today", "app");
    this.init();
  }

  init() {}
}
