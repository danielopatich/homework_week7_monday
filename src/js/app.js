import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import RepoFeed from './repo_feed';
import $ from "./jQuery";



class App extends React.Component {
  componentDidMount() {
    jQuery.ajax('https://api.github.com/users/danielopatich/repos')
      .then( repsonse => {
        this.setState({
          repos: response
        });
      })
  }



  render () {
    return (
      <main>
        <RepoFeed repos={this.state.repos.url}/>
      </main>
    )
  }
}


ReactDOM.render(
  <RepoFeed/>,
  document.getElementById('app')
);

export default App;
