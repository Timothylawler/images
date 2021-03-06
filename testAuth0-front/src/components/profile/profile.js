import React, { Component } from 'react';
import { getUser } from '../../utils';
import { CardContainer } from '../';

//	Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {showSpinner, hideSpinner} from '../../redux/actions';

//  Style
import './profile.css';

class ProfileComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    let profileId = this.props.params.id;

    this.props.actions.showSpinner("getting profile");
    getUser(profileId)
      .then(res => {
        this.setState({
          user: res
        })
        this.props.actions.hideSpinner();
      })
      .catch(error => {
        this.props.actions.hideSpinner();
      })
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <div className="container">
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
            <div className="images">
              <h2>Your gallery</h2>
              <span>+</span>
              {
                user.content?
                <CardContainer data={user.content.images}/>
                : "No image yet"
              }
            </div>
          </div>
      </div>
    );
  }
}


const Profile = connect(state => ({

}), dispatch => ({
  	actions: bindActionCreators({showSpinner, hideSpinner}, dispatch)
}))(ProfileComponent);
export { Profile };