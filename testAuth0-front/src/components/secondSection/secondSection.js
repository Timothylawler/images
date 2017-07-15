import React, { Component } from 'react';
import { ApiService } from '../../utils';
import { getUserProfile } from '../../utils';
import { ImageThumb } from '../';
import { CardContainer } from '../';


//	Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {showSpinner, hideSpinner} from '../../redux/actions';

//  Style
import './secondSection.css';


class SecondSectionComponent extends Component {
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
  }

  

  render() {
    const { second } = this.state;

    return (
      <div className="container">
        <div className="second-section">
          <h2>SECOND SECTION</h2>
          <div className="image-wrapper">
            <CardContainer data={second}/>
          </div>
        </div>
      </div>
    );
  }
}


const SecondSection = connect(state => ({

}), dispatch => ({
  	actions: bindActionCreators({showSpinner, hideSpinner}, dispatch)
}))(SecondSectionComponent);

export {SecondSection};