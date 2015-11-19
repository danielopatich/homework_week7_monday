import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import token from './token'

import RepoFeed from './repo_feed';
import ProfileList from './profile_list';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      users: {}
    }
  }

  componentDidMount() {
    this.getRepos();
    this.getProfile();
  }

  getRepos() {
    jQuery.ajax('https://api.github.com/users/danielopatich/repos')
      .then( response => {
        this.setState({
          repos: response
        });
      })
  }

  getProfile() {
    jQuery.ajax('https://api.github.com/users/danielopatich')
      .then( response => {
        this.setState({
          users: response
        });
      })
  }

  render () {
    return (
      <div className="pageWrap">
        <RepoFeed repos={this.state.repos}/>
        <ProfileList users={this.state.users}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

export default App;
