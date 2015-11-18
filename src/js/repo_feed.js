import React, { PropTypes } from 'react'
import Repo from './repo';

class RepoFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []  // stores repos in an empty array
    }
  }

  render () {
    let repos = this.props.repos.map(repo =>{
      return (
        <Repo url={repos.name}
          created={repos.created_at}/>
      )
    });
    return (
      <ul>
        {repos}
      </ul>
    )
  }
}

export default RepoFeed;
