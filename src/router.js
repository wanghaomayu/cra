import Menu from "./component/Menu";
import Home from "./component/Home";
import Features from "./component/Features";
import About from "./component/About";
import {Route, IndexRoute} from 'react-router'
import React from 'react';

const Routes = (
  <Route path='/' component={Menu}>
    <IndexRoute component={Home}/>
    <Route path='about' component={About}/>
    <Route path='features' component={Features}/>
  </Route>
);

export default Routes;