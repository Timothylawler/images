import React, { Component } from 'react';
import PropTypes from 'prop-types';

//	Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  showSpinner,
  hideSpinner
} from '../../redux/actions';

//  Style
import './loading-spinner.css';

class LoadingSpinnerComponent extends Component {

  componentDidMount() {
  }

  render() {
    console.log(this.props);
    const {loadingSpinner} = this.props;
    return (
      loadingSpinner.isShowing ?
      <div className="loading-spinner-container">
        <div className="loading-spinner">
          <div className="ball1"></div>
          <div className="ball2"></div>
          <div className="ball3"></div>
          <div className="ball4"></div>
          <div className="ball5"></div>
          
          
          <div className="info">
            { loadingSpinner.info }
          </div>
        </div>
      </div>
      :
      null
    );
  }
}

/*LoadingSpinner.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    image: PropTypes.string
}*/


const LoadingSpinner = connect(state => ({
	loadingSpinner: state.loadingSpinnerReducer
}), dispatch => ({
	actions: bindActionCreators({showSpinner, hideSpinner}, dispatch)
}))( LoadingSpinnerComponent );

export { LoadingSpinner };
