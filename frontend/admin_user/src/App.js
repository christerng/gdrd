import React, { Component } from 'react';
import './App.css';
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";

document.title = "GDRD: Admin User";
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
        <div className="bar-location-zone-1-market-strx">
          <div className="nav-barx">
            <img className="rectangle-7x" src={rectangle7} />
            <img className="sports-barx" src={sportsBar} />
            <img className="menux" src={menu} />
            <img className="heineken-logo-pngx" src={heinekenLogoPng} />
          </div>
          <div id="rectangle-house" className="rectangle-house">
            <span className="location-text">Admin View</span>
          </div>
          <div id="header-1" className="header">
            <span className="header-text">Queue</span>
          </div>
          <div id="header-2" className="header">
            <span className="header-text">Length</span>
          </div>
          <div id="header-3" className="header">
            <span className="header-text">Volume</span>
          </div>
          <div id="queue-1" className="queue">
            <span className="queue-text">1</span>
          </div>
          <div id="queue-2" className="queue">
            <span className="queue-text">2</span>
          </div>
          <div id="queue-3" className="queue">
            <span className="queue-text">3</span>
          </div>
          <div id="queue-4" className="queue">
            <span className="queue-text">4</span>
          </div>
          <div id="queue-5" className="queue">
            <span className="queue-text">5</span>
          </div>
          <div id="length-1" className="length">
            <span className="length-text">{this.state.lengths[1]}</span>
          </div>
          <div id="length-2" className="length">
            <span className="length-text">{this.state.lengths[2]}</span>
          </div>
          <div id="length-3" className="length">
            <span className="length-text">{this.state.lengths[3]}</span>
          </div>
          <div id="length-4" className="length">
            <span className="length-text">{this.state.lengths[4]}</span>
          </div>
          <div id="length-5" className="length">
            <span className="length-text">{this.state.lengths[5]}</span>
          </div>
          <div id="volume-1" className="volume">
            <span className="volume-text">{this.state.volumes[1]}</span>
          </div>
          <div id="volume-2" className="volume">
            <span className="volume-text">{this.state.volumes[2]}</span>
          </div>
          <div id="volume-3" className="volume">
            <span className="volume-text">{this.state.volumes[3]}</span>
          </div>
          <div id="volume-4" className="volume">
            <span className="volume-text">{this.state.volumes[4]}</span>
          </div>
          <div id="volume-5" className="volume">
            <span className="volume-text">{this.state.volumes[5]}</span>
          </div>
      </div>
      </div>
    );
  };
}

export default App;
