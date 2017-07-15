import React, { Component } from 'react';
import PropTypes from 'prop-types';

//  Style
import './imageThumb.css';

class ImageThumb extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className={this.props.className}>
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

ImageThumb.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    image: PropTypes.string
}

export { ImageThumb };