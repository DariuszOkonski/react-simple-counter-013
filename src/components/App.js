import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    result: 1,
    ratio: 2,
    flag: true,
  }

  handleClick = () => {
    this.setState({
      result: this.state.result * this.state.ratio,
    });
  }

  componentDidUpdate() {
    if (this.state.result >= 1024 && this.state.flag) {
      this.setState({
        ratio: 0.5,
        flag: false,
      })
    } else if (this.state.result < 1 && !this.state.flag) {
      this.setState({
        ratio: 2,
        flag: true,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Simple counter</h1>
        <button
          onClick={this.handleClick}
        >{this.state.flag ? `Multipyl by ${this.state.ratio}` : `Divide by ${this.state.ratio}`}</button>
        <h2>Result {this.state.result}</h2>
      </div>
    );
  }
}

export default App;