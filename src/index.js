import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import {browserHistory, Router} from 'react-router';

//  commit1
//  commit2
ReactDOM.render(
  <Router history={browserHistory} routes={Routes}/>, document.getElementById('root')
);
