import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import RepoFeed from './repo_feed';
import token from './token'



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }





  componentDidMount() {
    jQuery.ajax('https://api.github.com/users/danielopatich/repos')
      .then( response => {
        this.setState({
          repos: response
        });
      })
  }



  render () {
    return (
      <RepoFeed repos={this.state.repos}/>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

export default App;
