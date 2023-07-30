import { Todo } from "./todo";

describe("UNIT TEST - TODO", () => {
  let component: Todo;
  document.body.innerHTML = `<div id="app"></div>`;

  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders a todo item to the DOM", () => {
    component = new Todo("todo-item", "title", false, "todo-list");
    let todoElement = document.getElementById("todo-item");
    expect(todoElement).toBeDefined();
  });
});
