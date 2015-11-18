import React, { PropTypes } from 'react'
import jQuery from 'jquery';

class Repo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repo: this.props.repo.project
    }
  }

  render () {
    return (
      <li className="repo-title">
        <a href="#">{this.props.project}</a>
        <time className="created-at">{this.props.project.created_at}</time>
      </li>
    )
  }
}

Repo.defaultProps = {
  repo: {
    project: ''
  }
}


export default Repo;
