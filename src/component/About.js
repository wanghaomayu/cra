import React, {Component} from 'react';

// import ReactDOM from 'react-dom';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    // const dom = ReactDOM.findDOMNode(this);
    const dom = this.refs;
    console.log(dom);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count === this.state.count) {
      return false
    } else {
      return true
    }
  }

  componentDidUpdate() {
    console.log(this.state.count);
  }

  handleClick() {
    const {count} = this.state;
    this.setState({
      count: count
    })
  }


  render() {
    return (
      <div>
        <h1>About</h1>
        <p>我是About页面，这回中不？</p>
        <p>{this.state.count}</p>
        <input type="button" value="按钮" onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}

export default About;