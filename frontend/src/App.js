import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { lengths: {} };

  componentDidMount() {
    fetch('/api/volumes')
      .then(res => res.json())
      .then(lengths => this.setState({ lengths }));
  }

  render() {
    return (
      <div className="App">
        <h1>Lengths</h1>
        {this.state.lengths[1]}
      </div>
    );
  };
}

export default App;
