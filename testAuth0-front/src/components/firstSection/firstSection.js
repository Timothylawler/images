import React, { Component } from 'react';
import { ApiService } from '../../utils';

class FirstSection extends Component {
  constructor(){
    super();
    this.state = {
      first: []
    };
    this.apiService = new ApiService();
  }

  componentDidMount() {
    this.getCards();
  }

  getCards() {
    this.apiService.getFirstSection()
      .then(res => {
        console.log(res);
        this.setState({ first: res })
      })
      .catch(error => {
        console.log("Error fetching first: ", error);
      });
  }

  

  render() {
    const { first } = this.state;
    
    
    return (
      <div className="container">
        <div className="first-section">
          <h2>firstSection</h2>
          {
            first.map((item, index) => (
              <div key={item.id} className="card">
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export {FirstSection};