import { TodoList } from "./todolist";

describe("UNIT TEST - TODOLIST", () => {
  let component: TodoList;
  document.body.innerHTML = `<div id="app"></div>`;

  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = `<div id="app"></div>`;
  });

  it("Renders a todo list to the DOM", () => {
    let componentId = "todo-list";
    let parentId = "app";
    component = new TodoList(componentId, "title", parentId);
    let todoListElement = document.getElementById(componentId);
    expect(todoListElement).toBeDefined();
  });
  it("Renders a todo list with one todo to the DOM", () => {
    let componentId = "todo-list";
    let parentId = "app";
    component = new TodoList(componentId, "title", parentId);
    let todoListElement = document.getElementById(componentId);
    expect(todoListElement?.childElementCount).toBe(1);
  });
});
