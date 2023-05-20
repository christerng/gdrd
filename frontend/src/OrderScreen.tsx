import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import "./OrderScreen.css";
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import image from "./assets/image.png";
import image00 from "./assets/image00.png";
import imagenormal from "./assets/imagenormal.png";
import beerPlasticCup from "./assets/beerPlasticCup.png";

export default function App() {
  const navigate = useNavigate();
  const navigateToSelect1 = () => {
    navigate("/");
  };
  const incrementValue = () => {
    var value = parseInt(document.getElementById("orig-count").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("orig-count").value = value;
    document.getElementById("total-normal").innerHTML =
      "$" + value * 14 + ".00";
  };
  const decrementValue = () => {
    var value = parseInt(document.getElementById("orig-count").value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
    }
    document.getElementById("orig-count").value = value;
    document.getElementById("total-normal").innerHTML =
      "$" + value * 14 + ".00";
  };
  const incrementValue0 = () => {
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
  return (
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
      <div id="rectangle-house" className="rectangle-house">
        <span className="location-text">Zone 4 - Portside Hawkers</span>
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
      <Button color="success" onClick={incrementValue} idTag="plus-button-1">
        +
      </Button>
      <Button color="success" onClick={decrementValue} idTag="minus-button-1">
        -
      </Button>
      <Button color="success" onClick={incrementValue0} idTag="plus-button-2">
        +
      </Button>
      <Button color="success" onClick={decrementValue0} idTag="minus-button-2">
        -
      </Button>
      <form>
        <input className="order-count" id="orig-count" type="text" value="0" />
      </form>
      <form>
        <input className="order-count" id="zero-count" type="text" value="0" />
      </form>
      <Button color="success" onClick={decrementValue0} idTag="add-to-cart">
        Add to Cart
      </Button>
    </div>
  );
}
