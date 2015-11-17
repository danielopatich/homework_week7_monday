import React, { PropTypes } from 'react'

class TodoItem extends React.Component {
  handleCompleted(event) {

  }

  handleDeleted(event) {
    console.log('called handle deleted on one of our todo item');
  }

  render () {
    return (
      <li className="todo">
        <input type="checkbox"/>
        <h3>{this.props.text}</h3>
        <button onClick={this.handleDeleted}>&times;</button>
      </li>
    )
  }
}

export default TodoItem;
