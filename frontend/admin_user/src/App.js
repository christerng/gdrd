import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { lengths: {}, volumes: {} };

  componentDidMount() {
    fetch('/api/lengths')
      .then(res => res.json())
      .then(lengths => this.setState({ lengths }));
    fetch('/api/volumes')
      .then(res => res.json())
      .then(volumes => this.setState({ volumes }));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, Admin User!</h1>
        <div>Queue Lengths:</div>
        <div>1: {this.state.lengths[1]}</div>
        <div>2: {this.state.lengths[2]}</div>
        <div>3: {this.state.lengths[3]}</div>
        <div>4: {this.state.lengths[4]}</div>
        <div>5: {this.state.lengths[5]}</div>

        <div></div>

        <div>Queue Volumes:</div>
        <div>1: {this.state.volumes[1]}</div>
        <div>2: {this.state.volumes[2]}</div>
        <div>3: {this.state.volumes[3]}</div>
        <div>4: {this.state.volumes[4]}</div>
        <div>5: {this.state.volumes[5]}</div>
      </div>
    );
  };
}

export default App;
