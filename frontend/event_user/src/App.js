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
      <div className="flex-containerx">
        <img className="systemstatus-barx" src={systemstatusBar} />
        <div className="cat-absolute-containerx">
          <span className="num-1222x">17:30</span>
        </div>
      </div>
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
{/*       <Button color="light" onClick={navigateToSelect1} idTag="select-button-1">
        Zone 1 - Market Street: &gt; 30 mins
      </Button>
      <Button color="light" onClick={navigateToSelect2} idTag="select-button-2">
        Zone 1 - Coconut Grove: &gt; 30 mins
      </Button>
      <Button color="light" onClick={navigateToSelect3} idTag="select-button-3">
        Zone 3 - Bay Grandstand: &lt; 10 mins
      </Button>
      <Button color="light" onClick={navigateToSelect4} idTag="select-button-4">
        Zone 4 - Portside Hawkers: &gt; 20 mins
      </Button>
      <Button color="light" onClick={navigateToSelect5} idTag="select-button-5">
        Zone 4 - Orange@Empress..: &gt; 20 mins
      </Button> */}
    </div>
        <table border='1'>
          <tr>
            <th>Queue</th>
            <th>Length</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{this.state.lengths[1]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{this.state.lengths[2]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{this.state.lengths[3]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{this.state.lengths[4]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{this.state.lengths[5]}</td>
          </tr>
        </table>
      </div>
    );
  };
}

export default App;
