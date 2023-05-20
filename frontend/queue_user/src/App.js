import React, { Component } from 'react';
import './App.css';

const generate = require('./generate');
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const queue = event.target.queue.value;
    const volume = event.target.volume.value;

    const order = generate();
    alert(order);

    fetch(
      `/api/orders/queue/${queue}/order/${order}/volume/${volume}`,
      { method: 'POST' },
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, Queue User!</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="queue">Queue:</label><br /><br />
          <input type="text" id="queue" name="queue"></input><br /><br />
          <label for="volume">Volume:</label><br /><br />
          <input type="text" id="volume" name="volume"></input><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
}

export default App;
