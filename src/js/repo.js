import React, { PropTypes } from 'react'
import jQuery from 'jquery';

class Repo extends React.Component {
  render () {
    return (
      <li className="repo-title">
        <a href={this.props.url}>{this.props.repo}</a>
        <span className="created-at">Updated at: {this.props.time}</span>
      </li>
    )
  }
}

export default Repo;
