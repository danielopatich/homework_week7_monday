import React, { PropTypes } from 'react'

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
        <Repo key={repo.}
            title={repo.}
          created={repo.}/>
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
