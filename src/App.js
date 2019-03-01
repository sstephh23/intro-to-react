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
         ]
       };
   }

  render() {
    return (
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) =>
        <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
         )}
       </ul>
     </div>
   );
 }
}

export default App;
