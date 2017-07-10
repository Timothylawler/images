import React, { Component } from 'react';
import { ApiService } from '../../utils';
import { getUserProfile } from '../../utils';


class SecondSection extends Component {
  constructor(){
    super();
    this.state = {
      second: []
    };
    this.apiService = new ApiService();
  }

  componentDidMount() {
    this.getCards();
  }

  getCards() {
    this.apiService.getSecondSection()
      .then(res => {
        this.setState({ second: res });
      })
      .catch(error => {
        console.log("Error fetching second: ", error);
      })
    //getUserProfile();
    
  }

  

  render() {
    const { second } = this.state;

    
    return (
      <div className="first-section">
        <h2>SecondSection</h2>
        {
          second.map((item, index) => (
            <div key={item.id} className="card">
              <p>{item.text}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export {SecondSection};