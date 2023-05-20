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
        <h1>Admin Interface</h1>
        <table border='1'>
          <tr>
            <th>Queue</th>
            <th>Length</th>
            <th>Volume</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{this.state.lengths[1]}</td>
            <td>{this.state.volumes[1]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{this.state.lengths[2]}</td>
            <td>{this.state.volumes[2]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{this.state.lengths[3]}</td>
            <td>{this.state.volumes[3]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{this.state.lengths[4]}</td>
            <td>{this.state.volumes[4]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{this.state.lengths[5]}</td>
            <td>{this.state.volumes[5]}</td>
          </tr>
        </table>
      </div>
    );
  };
}

export default App;
