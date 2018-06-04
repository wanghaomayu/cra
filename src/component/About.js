import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class About extends Component {
  componentDidMount(){
    const dom = ReactDOM.findDOMNode(this);
    console.log(dom);
  }
  render(){
    return (
      <div>
        <h1>About</h1>
        <p>我是About页面，这回中不？</p>
      </div>
    )
  }
}
export default About;