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
        <div className="bar-location-zone-1-market-strx">
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
              <button type="submit" id = "add-to-cart">Submit</button>
          </form>
          <form>
          <label for="zero-count"></label>
          <input type="button" id="minus-button-2" onClick = {decrementValue0} value ="-" />
          <input type="button" id="plus-button-2" onClick = {incrementValue0} value ="+" />
            <input className="order-count" id="zero-count" type="text" value="0" />
          </form>
        </div>
      </div>
    );
  };
}

export default App;
