import React, { PropTypes } from 'react';
import jQuery from 'jquery';

import TodoItem from './todo-item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleCompleted = this.handleCompleted.bind(this);
  }

  handleCompleted(id, event) {
    let completed = event.target.checked;
    let options = {
      url: 'http://tiny-starburst.herokuapp.com/collections/todos/' + id,
      method: 'PUT',
      data: {
        completed: completed
      }
    };

    jQuery.ajax(options);

    this.props.updateTodo({
      _id: id,
      completed: completed
    });
  }

  render () {
    if (!this.props.todos.length && !this.props.hasLoaded) {
      return <div>Loading...</div>
    }
    let todos = this.props.todos.map(todo =>{
      return <TodoItem key={todo._id}
                       todo={todo}
                       handleCompleted={this.handleCompleted.bind(this, todo._id)}
                       />
    });
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default TodoList;
