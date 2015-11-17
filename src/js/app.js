import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import Header from './header';
import TodoList from './todo-list';
import Add from './add';
import Counter from './counter';
import Filter from './filter';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);

    this.state = {
      hasLoaded: false,
      todos: []
    }
  }

  handleAdd(task) {
    let todos = this.state.todos;
    todos.unshift(task);

    this.setState({
      todos: todos
    });
  }

  componentDidMount() {
    this.getTodos();
    // setInterval(() => {
    //   this.getTodos();
    // }, 3000);
  }


  getTodos() {
    jQuery.ajax('http://tiny-starburst.herokuapp.com/collections/todos')
          .then( response => {
            this.setState({
              hasLoaded: true,
              todos: response
            });
          })
  }

  render() {
    return (
      <main>
        <Header/>
        <Add handleAdd={this.handleAdd}/>
        <TodoList todos={this.state.todos}/>
        <Counter/>
        <Filter/>
      </main>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);


export default App;
