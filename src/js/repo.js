import React, { PropTypes } from 'react'
import jQuery from 'jquery';

class Repo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: this.props.repos.name
    }
  }

  render () {
    return (
      <li className="repo-title">
        <a href="#">{this.props.repos.name}</a>
        <time className="created-at">{this.props.repos.created_at}</time>
      </li>
    )
  }
}

Repo.defaultProps = {
  repos: {
    repos: repos.url
  }
}


export default Repo;
