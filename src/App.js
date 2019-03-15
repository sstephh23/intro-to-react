import React, { Component } from 'react';
import './App.css';
import ToDo from './component/ToDo.js';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
         todos: [
           { description: 'laundry', isCompleted: true },
           { description: 'wash the dishes', isCompleted: false },
           { description: 'clean the windows', isCompleted: false }
         ],
         newTodoDescription: ''
       };
   }
   toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }
  deleteTodo(description) {
    const filterTodos = this.state.todos.filter((todo) => todo.description !== description)
    this.setState({todos: filterTodos})
  }

   handleChange(e) {
        this.setState({ newTodoDescription: e.target.value })
      }

   handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newTodoDescription) { return }
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }
  render() {
    return (
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) =>
        <ToDo key={ index }
              description={ todo.description }
              isCompleted={ todo.isCompleted }
              toggleComplete={ () => this.toggleComplete(index) }
              deleteTodo={() => this.deleteTodo(todo.description) } />
         )}
       </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
     </div>
   );
 }
}

export default App;
