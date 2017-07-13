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
        {
          user.userName
        }
      </div>
    );
  }
}

export { Profile };