import React, { Component } from 'react';
import { setAccessToken, setIdToken, postUserToBackend } from '../../utils';

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
    postUserToBackend().then(() => {
      window.location.href = "/";
    });
  }

  render() {
    return (
      <div>Loading...</div>
    );
  }
}

export {Callback};