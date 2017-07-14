import React, { Component } from 'react';
import {
  Start,
  Navbar,
  FirstSection
} from './components'
import {Route} from 'react-router';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          {
            this.props.children || <FirstSection/>
          }
        </div>
      </div>
    );
  }
}

export default App;
