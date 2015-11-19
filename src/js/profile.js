import React, { PropTypes } from 'react'
import jQuery from 'jquery';

class Profile extends React.Component {
  render () {
    return (
      <li className="profileInfo">
        <a>{this.props.name}</a>
        <a>{this.props.login}</a>
        <a>{this.props.company}</a>
        <a>{this.props.location}</a>
        <a>{this.props.created}</a>
      </li>
    )
  }
}

export default Profile;
