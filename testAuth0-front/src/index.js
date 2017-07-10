import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import { SecondSection, Callback } from './components';
import { requireAuth } from './utils';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <div className="">
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/second" component={SecondSection} onEnter={requireAuth}/>
        </Route>
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
