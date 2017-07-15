import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ApiService } from '../../../utils';
//	Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  showSpinner,
  hideSpinner
} from '../../../redux/actions';

//  Style
import './image-details.css';

class ImageDetailsComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
    this.apiService = new ApiService();
  }
  componentDidMount() {
    this.props.actions.showSpinner();

    let imageId = this.props.params.id;
    this.apiService.getImageDataById(imageId)
      .then(res => {
        console.log(res);
        this.setState({data: res});
        this.props.actions.hideSpinner();
      })
      .catch(error => {
        console.log(error);
        this.props.actions.hideSpinner();
      });
    
  }

  componentWillUnmount(){
    this.props.actions.hideSpinner();
  }

  render() {
    return (
      <div className="image-details">
        <img src={this.state.data.image} />

      </div>
    );
  }
}

ImageDetailsComponent.propTypes = {
  //image: PropTypes.object.isRequired
}

const ImageDetails = connect(state => ({
  //image: state.currentImageReducer,
  loadingSpinner: state.loadingSpinnerReducer
}), dispatch => ({
  actions: bindActionCreators({showSpinner, hideSpinner}, dispatch)
}))(ImageDetailsComponent)
export { ImageDetails };