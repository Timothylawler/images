import React, { Component } from 'react';
import {
  Start,
  Navbar,
  FirstSection,
  LoadingSpinner
} from './components'
import {Route} from 'react-router';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="">
          {
            this.props.children || <FirstSection/>
          }
        </div>
        <LoadingSpinner />
      </div>
    );
  }
}

export default App;
