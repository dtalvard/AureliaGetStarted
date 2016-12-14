import { Todo } from './todo';

export class App {
  private heading: string;
  private todoDescription: string;
  private todos: Todo[];

  constructor() {
    this.heading = "Todos toto";
    this.todoDescription = '';
    this.todos = [];
  };

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
    }
  };

  removeTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  };
}
