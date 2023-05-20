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
        <h1>Hello, Staff User!</h1>
      </div>
    );
  };
}

export default App;
