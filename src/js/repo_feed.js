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
        <Repo key={repo.id}
              url={repo.html_url}
             repo={repo.name}
             time={repo.created_at}/>
      )
    });

    return (
      <ul className="repoFeed">
        {repos}
      </ul>
    )
  }
}

export default RepoFeed;
