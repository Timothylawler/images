import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import { 
  SecondSection, 
  Callback,
  Profile 
} from './components';
import { requireAuth } from './utils';
import registerServiceWorker from './registerServiceWorker';

/*  Redux */
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import { 
  navbarReducer,
  userReducer,
  loadingSpinnerReducer
} from './redux/reducers';
const store = createStore(combineReducers({
  navbarReducer,
  userReducer,
  loadingSpinnerReducer
}));

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/second" component={SecondSection}/>
          <Route path="/profile/:id" component={Profile} onEnter={requireAuth}/>
        </Route>
        <Route path="/callback" component={Callback} />
      </Router>
    </Provider>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
