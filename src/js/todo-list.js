import React, { PropTypes } from 'react';
import TodoItem from './todo-item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.updateTodo = this.updateTodo.bind(this);
  }

  handleUpdate() {
    console.log('called the update todo function');
  }

  render () {
    if (!this.props.todos.length && !this.props.hasLoaded) {
      return <div>Loading...</div>
    }
    let todos = this.props.todos.map(todo =>{
      return <TodoItem key={todo.id}
                 completed={todo.completed}
                      text={todo.text}
                    todoId={todo.id}
              handleUpdate={todo.handleUpdate}/>
    });
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default TodoList;
