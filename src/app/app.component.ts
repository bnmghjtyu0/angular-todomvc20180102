import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  inputHint: string = "需要做什麼?";

  todos: any[] = [];
  todo: string = "";
  addTodo() {
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };
      this.todos.push(newTodo);
      this.todo = "";
    }
  }
}
