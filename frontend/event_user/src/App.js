import React, { Component } from 'react';
import './App.css';
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import f1GrandPrixMap from "./assets/f1GrandPrixMap.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import map from "./assets/map.svg";
import rectangle from "./assets/rectangle.svg";
import beer from "./assets/beer.svg";
import group from "./assets/group.svg";
import publicTransport from "./assets/publicTransport.svg";
import car from "./assets/car.png";

const switchScreen1a = () => {
  document.getElementById("Screen-1").style.visibility="hidden";
  document.getElementById("Screen-2").style.visibility="visible";
};
const switchScreen1b = () => {
  document.getElementById("Screen-1").style.visibility="hidden";
  document.getElementById("Screen-5").style.visibility="visible";
};
const switchScreen2a = () => {
  document.getElementById("Screen-2").style.visibility="hidden";
  document.getElementById("Screen-3").style.visibility="visible";
};
const switchScreen2b = () => {
  document.getElementById("Screen-2").style.visibility="hidden";
  document.getElementById("Screen-4").style.visibility="visible";
};
const switchScreen3 = () => {
  document.getElementById("Screen-3").style.visibility="hidden";
  document.getElementById("Screen-1").style.visibility="visible";
};
const switchScreen5 = () => {
  document.getElementById("Screen-5").style.visibility="hidden";
  document.getElementById("Screen-1").style.visibility="visible";
};
document.title = "GDRD: Event User";
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
        <div className="Screen-1" id="Screen-1">
          <div className="flex-container-1">
            <img className="rectangle" src={rectangle} />
            <div className="cat-absolute-container-1">
              <img className="heineken-logo-png" src={heinekenLogoPng} />
              <div className="rectangle-1a">
                <img className="beer" src={beer} />
                <div className="flex-container-2">
                  <span className="take-me-to-the-fast-lane">
                    Take me to the Fast Lane
                  </span>
                  <button class="button" id="to-18" onClick = {switchScreen1a}>Where to Get Beer?</button>
                </div>
              </div>
              <div className="rectangle-2a">
                <img className="map" src={map} />
                <div className="flex-container-3">
                  <span className="im-done-for-the-day">I am done for the day</span>
                  <button class="button" id="to-valet" onClick = {switchScreen1b}>Get Home Safe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Screen-2" id="Screen-2">
          <div className="flex-container-1">
            <img className="rectangle" src={rectangle} />
            <div className="cat-absolute-container-1">
              <img className="heineken-logo-png" src={heinekenLogoPng} />
              <span className="are-you-18-years-old-above">
                Are you 18 years old &amp; above?
              </span>
              <div className="flex-container-2">
              <button class="giant-button" id="no-button" type="submit" onClick = {switchScreen2a}>No</button>
              <button class="giant-button" id="yes-button" type="submit" onClick = {switchScreen2b}>Yes</button>
              </div>
              <span className="please-note-that-the-purchase-of-1">
                Please note that the purchase of alcohol is restricted to
                individuals aged 18 years and above.
              </span>
            </div>
          </div>
        </div>
        <div className="Screen-3" id="Screen-3">
          <div className="flex-container-1">
            <img className="rectangle" src={rectangle} />
            <div className="cat-absolute-container-1">
              <img className="heineken-logo-png" src={heinekenLogoPng} />
              <img className="group" src={group} />
              <span className="the-age-for-beer-adventures-is-y">
                The age for beer adventures is yet to come. Stay patient, and cheers
                to future hoppy memories!
              </span>
              <button class="button-1" id="to-home" onClick = {switchScreen3}>Back to Home</button>
              <span className="please-note-that-the-purchase-of">
                Please note that the purchase of alcohol is restricted to
                individuals aged 18 years and above.
              </span>
            </div>
          </div>
        </div>
        <div className="Screen-4" id="Screen-4">
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
            <span>Zone 1 - Market Street:&nbsp; {this.state.lengths[1]} &nbsp;in queue </span>
          </div>
          <div className="queue-2">
            <span>Zone 1 - Coconut Grove:&nbsp; {this.state.lengths[2]} &nbsp;in queue </span>
          </div>
          <div className="queue-3">
            <span>Zone 3 - Bay Grandstand:&nbsp; {this.state.lengths[3]} &nbsp;in queue </span>
          </div>
          <div className="queue-4">
            <span>Zone 4 - Portside Hawkers:&nbsp; {this.state.lengths[4]} &nbsp;in queue </span>
          </div>
          <div className="queue-5">
            <span>Zone 4 - Orange@Empress..:&nbsp; {this.state.lengths[5]} &nbsp;in queue </span>
          </div>
        </div>
        <div className="Screen-5" id="Screen-5">
          <div className="flex-container-1">
            <img className="rectangle" src={rectangle} />
            <div className="cat-absolute-container-1">
              <img className="heineken-logo-png" src={heinekenLogoPng} />
              <div className="rectangle-1">
                <div className="valet">
                  <div className="flex-container-2">
                    <img className="car" src={car} />
                  </div>
                </div>
                <div className="flex-container-3">
                  <span className="when-you-drink-never-drive">
                    When You Drink Never Drive
                  </span>
                  <button class="button" id="car-button" onClick = {switchScreen5}>Valet Service</button>
                </div>
              </div>
              <div className="rectangle-2">
                <img className="public-transport" src={publicTransport} />
                <div className="flex-container-4">
                  <span className="not-behind-the-wheels">
                    Not Behind the Wheels
                  </span>
                  <button class="button" id="pub-transpo-button" onClick = {switchScreen5}>Valet Service</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
