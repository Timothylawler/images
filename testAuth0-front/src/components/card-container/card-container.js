import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {ImageThumb} from '../image';

import './card-container.css';

class CardContainer extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="image-wrapper">
          {
            this.props.data.map((item, index) => (
              <ImageThumb className="item" key={item.id} {...item} />
            )) 
          }
        </div>
      </div>
    );
  }
}

CardContainer.PropTypes = {
  data: PropTypes.object.isRequired
}



export {CardContainer};