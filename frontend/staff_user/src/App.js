import React, { Component } from 'react';
import './App.css';
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";

document.title = "GDRD: Staff User";
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const queue = event.target.queue.value;
    const order = event.target.order.value;

    fetch(
      `/api/orders/queue/${queue}/order/${order}`,
      { method: 'DELETE' },
    );
    alert("Done!");
    document.getElementById("queue").value = "0";
    document.getElementById("order").value = "0000";
  }

  render() {
    return (
      <div className="App">
        <div className="bar-location-zone-1-market-strx">
          <div className="nav-barx">
            <img className="rectangle-7x" src={rectangle7} />
            <img className="sports-barx" src={sportsBar} />
            <img className="menux" src={menu} />
            <img className="heineken-logo-pngx" src={heinekenLogoPng} />
          </div>
          <div id="rectangle-house" className="rectangle-house">
            <span className="location-text">Staff View</span>
          </div>
          <div id="rectangle-house-2" className="rectangle-house">
          </div>
          <form className = "staff-form" onSubmit={this.handleSubmit}>
            <label for="queue">Queue:</label><br /><br />
            <input type="text" id="queue" name="queue" defaultValue="0"></input><br /><br />
            <label for="order">Order:</label><br /><br />
            <input type="text" id="order" name="order" defaultValue="0000"></input><br /><br />
            <button type="submit" id="submit-butt">Submit</button>
          </form>
      </div>
      </div>
    );
  };
}

export default App;
