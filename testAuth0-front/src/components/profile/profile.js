import React, { Component } from 'react';
import { getUser } from '../../utils';

//  Style
import './profile.css';

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    getUser()
      .then(res => {
        this.setState({
          user: res
        })
      })
      .catch(error => {

      })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="profile">
        <div className="intro">
          <div className="profile-image-wrapper">
            <img src={user.profileImage}/>
          </div>
          <div className="intro-text">
            <h1>{user.userName}</h1>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export { Profile };