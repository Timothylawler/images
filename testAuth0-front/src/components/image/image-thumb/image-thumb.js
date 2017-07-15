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
    console.log(this.props);
    //this.props.actions.setCurrentImage({url:this.props.image, id: this.props.id});
    browserHistory.push(`/details/${this.props.id}`);
    console.log("clicked");
  }

  render() {
    return (
      <div className={this.props.className} onClick={()=>this._onClick()}>
        <div className="image-thumb">
          <img className="image" src={this.props.image}/>
          <div className="hover-content">
            <h1>Title</h1>
            <p>{this.props.text}</p>
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