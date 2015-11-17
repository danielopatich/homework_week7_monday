import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import TodoItem from './todo-item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false,
      todos: []
    }
  }
  componentDidMount() {
    jQuery.ajax('http://tiny-starburst.herokuapp.com/collections/todos')
          .then( response => {
            this.setState({
              hasLoaded: true,
              todos: response
            });
          })
  }

  render () {
    if (this.state.todos.length && !this.state.hasLoaded) {
      return <div>Loading...</div>
    }
    let todos = this.state.todos.map(todo =>{
      return <TodoItem key={todo.id}
                 completed={todo.completed}
                      text={todo.text}
                    todoId={todo.id}/>
    });
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default TodoList;
