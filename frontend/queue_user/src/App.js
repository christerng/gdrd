import React, { Component } from 'react';
import './App.css';
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import image from "./assets/image.png";
import image00 from "./assets/image00.png";
import imagenormal from "./assets/imagenormal.png";
import beerPlasticCup from "./assets/beerPlasticCup.png";
import cheers from "./assets/cheers.svg";

const generate = require('./generate');

const incrementValue = () => {
  console.log("Hello");
  var value = parseInt(document.getElementById("volume").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("volume").value = value;
  document.getElementById("total-normal").innerHTML =
    "$" + value * 14 + ".00";
};
const decrementValue = () => {
  var value = parseInt(document.getElementById("volume").value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
  }
  document.getElementById("volume").value = value;
  document.getElementById("total-normal").innerHTML =
    "$" + value * 14 + ".00";
};
const incrementValue0 = () => {
  console.log("Hello");
  var value = parseInt(document.getElementById("zero-count").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("zero-count").value = value;
  document.getElementById("total-00").innerHTML = "$" + value * 14 + ".00";
};
const decrementValue0 = () => {
  var value = parseInt(document.getElementById("zero-count").value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 0) {
    value--;
  }
  document.getElementById("zero-count").value = value;
  document.getElementById("total-00").innerHTML = "$" + value * 14 + ".00";
};

const switchScreen = () => {
  document.getElementById("screen-1").style.visibility="hidden";
  document.getElementById("screen-2").style.visibility="visible";
};
document.title = "GDRD: Queue User";
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const queue = event.target.queue.value;
    const volume = event.target.volume.value;

    const order = generate();
    document.getElementById("dig-1").innerHTML =
    order[0];
    document.getElementById("dig-2").innerHTML =
    order[1];
    document.getElementById("dig-3").innerHTML =
    order[2];
    document.getElementById("dig-4").innerHTML =
    order[3];

    fetch(
      `/api/orders/queue/${queue}/order/${order}/volume/${volume}`,
      { method: 'POST' },
    );
  }

  render() {

    return (
      <div className="App">
        <div className="screen-1" id="screen-1">
          <div className="nav-barx">
            <img className="rectangle-7x" src={rectangle7} />
            <img className="sports-barx" src={sportsBar} />
            <img className="menux" src={menu} />
            <img className="heineken-logo-pngx" src={heinekenLogoPng} />
          </div>
          <div id="rectangle-house" className="rectangle-house">
            <span className="location-text">Respective Outlet Here</span>
          </div>
          <img className="image" src={image} />
          <div id="rect-1" className="rect-1"></div>
          <div id="rect-2" className="rect-1"></div>
          <img id="cupnormal" className="beerPlasticCup" src={beerPlasticCup} />
          <img id="cup00" className="beerPlasticCup" src={beerPlasticCup} />
          <img className="imagenormal" src={imagenormal} />
          <img className="image00" src={image00} />
          <span className="orig-text">Heineken Original</span>
          <span className="abv-normal">ABV 5%</span>
          <span className="price-normal">Cup - $14.00</span>
          <div>
            <span className="total-normal" id="total-normal">
              $0.00
            </span>
          </div>
          <span className="zero-text">Heineken 0.0</span>
          <span className="abv-00">ABV 0.0%</span>
          <span className="price-00">Cup - $14.00</span>
          <div>
            <span className="total-00" id="total-00">
              $0.00
            </span>
          </div>
          <form onSubmit={this.handleSubmit}>
          <label for="orig-count"></label>
          <input type="button" id="minus-button-1" onClick = {decrementValue} value ="-" />
          <input type="button" id="plus-button-1" onClick = {incrementValue} value ="+" />
            <input className="order-count" id="volume" name="volume" type="text" defaultValue ="0" />
            <label for="queue" id="q-label">Q:</label><br /><br />
              <input type="text" id="queue" name="queue" defaultValue ="1"></input><br /><br />
              <label for="volume">Volume:</label><br /><br />
              <button type="submit" onClick = {switchScreen} id = "add-to-cart">Submit</button>
          </form>
          <form>
          <label for="zero-count"></label>
          <input type="button" id="minus-button-2" onClick = {decrementValue0} value ="-" />
          <input type="button" id="plus-button-2" onClick = {incrementValue0} value ="+" />
            <input className="order-count" id="zero-count" type="text" value="0" />
          </form>
        </div>
        <div className="screen-2" id="screen-2">
          <div className="nav-barx">
            <img className="rectangle-7x" src={rectangle7} />
            <img className="sports-barx" src={sportsBar} />
            <div className="local-mallx" />
            <img className="menux" src={menu} />
            <img className="heineken-logo-pngx" src={heinekenLogoPng} />
          </div>
          <div id="rectangle-bar" className="rectangle-bar"></div>
          <div id="rectangle-gr-2" className="rectangle-gr-2"></div>
          <span className="all-set">Cheers to your order! It's all set.</span>
          <img className="cheers" src={cheers} />
          <div className="please-display">
            <span className="please-display-txt">
              Please display these four digits to the bar counter attendant in order
              to collect your beer.
            </span>
          </div>
          <div className="giant-num" id="giant-num-1">
            <span id='dig-1'>0</span>
          </div>
          <div className="giant-num" id="giant-num-2">
            <span id='dig-2'>0</span>
          </div>
          <div className="giant-num" id="giant-num-3">
            <span id='dig-3'>0</span>
          </div>
          <div className="giant-num" id="giant-num-4">
            <span id='dig-4'>0</span>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
