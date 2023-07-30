import { Todoable } from "./todoable.interface";

export interface TodoListable {
  id: string;
  title: string;
  parentId: string;
}
