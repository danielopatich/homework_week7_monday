import React, { PropTypes } from 'react'
import Profile from './profile';

class ProfileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  render () {
    let users = this.props.users.map(user =>{
      return (
        <Profile name={user.name}
            login={user.login}
          company={user.company}
         location={user.location}
          created={user.created_at}/>
      )
    });

    return (
      <ul className="profileFeed">
        {users}
      </ul>
    )
  }
}

export default ProfileList;
