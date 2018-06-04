import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import {browserHistory, Router} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory} routes={Routes}/>, document.getElementById('root')
);
