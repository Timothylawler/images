import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

//	Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setCurrentImage,
  clearCurrentImage
} from '../../../redux/actions';

//  Style
import './imageThumb.css';

class ImageThumbComponent extends Component {

  componentDidMount() {
  }

  _onClick(){
    this.props.actions.setCurrentImage(this.props.image);
    browserHistory.push("/details");
    console.log("clicked");
  }

  render() {
    return (
      <div className={this.props.className} onClick={()=>this._onClick()}>
        <div className="image-thumb">
          <img className="image" src={this.props.image}/>
          <div className="hover-content">
            <h1>Title</h1>
            <p>text text text text text text</p>
          </div>
        </div>
      </div>
    );
  }
}

ImageThumbComponent.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    image: PropTypes.string
}


const ImageThumb = connect(state => ({

}), dispatch => ({
  actions: bindActionCreators({setCurrentImage, clearCurrentImage}, dispatch)
}))(ImageThumbComponent)
export { ImageThumb };