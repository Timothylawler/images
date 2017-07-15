import React, { Component } from 'react';
import PropTypes from 'prop-types';

//	Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setCurrentImage,
  clearCurrentImage
} from '../../../redux/actions';

//  Style
import './image-details.css';

class ImageDetailsComponent extends Component {

  componentDidMount() {
  }

  render() {
    console.log("asd",this.props);
    return (
      <div className="image-details">
        <img src={this.props.image.image} />
      </div>
    );
  }
}

ImageDetailsComponent.propTypes = {
  image: PropTypes.object.isRequired
}

const ImageDetails = connect(state => ({
  image: state.currentImageReducer
}), dispatch => ({
  actions: bindActionCreators({setCurrentImage, clearCurrentImage}, dispatch)
}))(ImageDetailsComponent)
export { ImageDetails };