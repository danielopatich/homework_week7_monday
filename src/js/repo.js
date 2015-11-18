import React, { PropTypes } from 'react'
import jQuery from 'jquery';

class Repo extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     repos: this.props.repos
  //   }
  // }

  render () {
    return (
      <li className="repo-title">
        <a href={this.props.repo.html_url}>{this.props.repo.name}</a>
        <time className="created-at">{this.props.repo.created_at}</time>
      </li>
    )
  }
}

// Repo.defaultProps = {
//   repos: {
//     repos: repos
//   }
// }


export default Repo;
