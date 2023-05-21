import React, { Component } from 'react';
import './App.css';
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import f1GrandPrixMap from "./assets/f1GrandPrixMap.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";

class App extends Component {
  state = { lengths: {} };

  componentDidMount() {
    fetch('/api/lengths')
      .then(res => res.json())
      .then(lengths => this.setState({ lengths }));
  }

  render() {
    return (
      <div className="App">
        <div className="bar-location-zone-1-market-strx">
      <div className="nav-barx">
        <img className="rectangle-7x" src={rectangle7} />
        <img className="sports-barx" src={sportsBar} />
        <div className="local-mallx" />
        <img className="menux" src={menu} />
        <img className="heineken-logo-pngx" src={heinekenLogoPng} />
      </div>
      <div className="flex-container-1x">
        <img className="f-1-grand-prix-mapx" src={f1GrandPrixMap} />
      </div>
      <span className="select-bar-to-orderx">Select bar to order from:</span>
      <div className="queue-1">
        <span>Zone 1 - Market Street:&nbsp; {this.state.lengths[1]} &nbsp; in queue </span>
      </div>
      <div className="queue-2">
        <span>Zone 1 - Coconut Grove:&nbsp; {this.state.lengths[2]} &nbsp; in queue </span>
      </div>
      <div className="queue-3">
        <span>Zone 3 - Bay Grandstand:&nbsp; {this.state.lengths[1]} &nbsp; in queue </span>
      </div>
      <div className="queue-4">
        <span>Zone 4 - Portside Hawkers:&nbsp; {this.state.lengths[1]} &nbsp; in queue </span>
      </div>
      <div className="queue-5">
        <span>Zone 4 - Orange@Empress..:&nbsp; {this.state.lengths[1]} &nbsp; in queue </span>
      </div>
    </div>
      </div>
    );
  };
}

export default App;
