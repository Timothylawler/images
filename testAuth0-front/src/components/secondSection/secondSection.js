import React, { Component } from 'react';
import { ApiService } from '../../utils';
import { getUserProfile } from '../../utils';
import { ImageThumb } from '../';
import { CardContainer } from '../';

//  Style
import './secondSection.css';


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
      <div className="container">
        <div className="second-section">
          <h2>SecondSection</h2>
          <div className="image-wrapper">
            <CardContainer data={second}/>
          </div>
        </div>
      </div>
    );
  }
}
            /*{
              second.map((item, index) => (
                <ImageThumb className="item" key={item.id} {...item} />
              ))
            }*/

export {SecondSection};