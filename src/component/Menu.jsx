import React, { Component } from 'react';
import {Link} from 'react-router'

class Menu extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Menu;
