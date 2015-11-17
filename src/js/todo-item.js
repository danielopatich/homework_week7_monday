import React, { PropTypes } from 'react'
import jQuery from 'jquery';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleDeleted = this.handleDeleted.bind(this);

    this.state = {
      completed: this.props.todo.completed,
      text: this.props.todo.text
    }
  }

  handleCompleted(event) {
    let completed = this.refs.completed.checked;


    console.log('we called the handle completed stuffs');
  }

  handleDeleted(event) {
    console.log('called handle deleted on one of our todo item');
  }

  render () {
    return (
      <li className="todo">
        <input type="checkbox"
           onChange={this.handleCompleted}
                ref="completed"
            checked={this.state.completed}/>
        <h3>{this.props.text}</h3>
        <button onClick={this.handleDeleted}
                ref="deleted">&times;</button>
      </li>
    )
  }
}

TodoItem.defaultProps = {
  todo: {
    text: "",
    completed: false
  }
}

export default TodoItem;
