import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import $ from "./jQuery";

import RepoFeed from './repo_feed';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }





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
        <RepoFeed repos={this.state.repos}/>
      </main>
    )
  }
}


ReactDOM.render(
  <RepoFeed/>,
  document.getElementById('app')
);

export default App;
