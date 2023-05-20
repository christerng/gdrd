import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const queue = event.target.queue.value;
    const order = event.target.order.value;

    fetch(
      `/api/orders/queue/${queue}/order/${order}`,
      { method: 'DELETE' },
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, Staff User!</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="queue">Queue:</label><br /><br />
          <input type="text" id="queue" name="queue"></input><br /><br />
          <label for="order">Order:</label><br /><br />
          <input type="text" id="order" name="order"></input><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
}

export default App;
