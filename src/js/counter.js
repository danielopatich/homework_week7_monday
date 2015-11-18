import React, { PropTypes } from 'react'

class Counter extends React.Component {
  render () {
    return (
      <div>
        <span>{this.props.count}</span> Items
      </div>
    )
  }
}

export default Counter;
