// LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import _ from 'lodash';
// END LIBRARIES

// COMPONENTS
import Header from './header';
import TodoList from './todo-list';
import Add from './add';
import Counter from './counter';
import Filter from './filter';
// END COMPONENTS


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.updateTodo = this.updateTodo.bind(this);

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

  updateTodo(data) {
    let todos = this.state.todos;
    let todoIndex = _.findIndex(todos, {_id: data._id});

    todos[todoIndex].completed = data.completed;

    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <main>
        <Header/>
        <Add handleAdd={this.handleAdd}/>
        <TodoList todos={this.state.todos}
                  hasLoaded={this.state.hasLoaded}
                  updateTodo={this.updateTodo}/>
        <Counter count={this.state.todos.length}/>
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
