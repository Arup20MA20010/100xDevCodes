/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(todoIndex) {
    const todoList = this.todos;
    if (todoList.length <= todoIndex || todoIndex < 0) return;
    const otherList = todoList.splice(todoIndex + 1, todoList.length);
    todoList.pop();
    for (let num of otherList) todoList.push(num);
    otherList.splice(0, otherList.length);
  }
  update(todoIndex, updatedTodo) {
    const todoList = this.todos;
    if (todoList.length <= todoIndex || todoIndex < 0) return;
    todoList[todoIndex] = updatedTodo;
  }
  getAll() {
    const todoList = this.todos;
    return todoList.filter((todo) => todo !== undefined);
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.todos.length || indexOfTodo < 0) return null;
    return this.todos[indexOfTodo];
  }
  clear() {
    const todoList = this.todos;
    todoList.splice(0, todoList.length);
  }
}

module.exports = Todo;
