import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import token from './token'

import RepoFeed from './repo_feed';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
    }
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    jQuery.ajax('https://api.github.com/users/danielopatich/repos')
      .then( response => {
        this.setState({
          repos: response
        });
      })
  }

  render () {
    return (
      <div className="pageWrap">
        <RepoFeed repos={this.state.repos}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

export default App;
