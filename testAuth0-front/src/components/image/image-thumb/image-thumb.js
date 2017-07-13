import React, { Component } from 'react';
import PropTypes from 'prop-types';

//  Style
import './image-thumb.css';

class ImageThumb extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className={this.props.className}>
        <img className="image-thumb-image" src={this.props.image}/>
      </div>
    );
  }
}

ImageThumb.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    image: PropTypes.string
}

export { ImageThumb };