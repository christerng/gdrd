import * as React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import imagenormal from "./assets/imagenormal.png";
import beerPlasticCup from "./assets/beerPlasticCup.png";

interface Props {
  prop01: string;
}
export default function OrderSummary() {
  var norm_count = sessionStorage.getItem("var01");
  var norm_cost = sessionStorage.getItem("var02");
  const navigate = useNavigate();
  const navigateToOrderScreen = () => {
    navigate("/OrderScreen");
  };
  const navigateToOrderConf = () => {
    navigate("/OrderConf");
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
      <Button
        color="outline-success"
        onClick={navigateToOrderScreen}
        idTag="back-button"
      >
        ⇦ Back
      </Button>
      <span className="summary">Summary</span>
      <span className="order-conf">Order Confirmation</span>
      <div id="rectangle-bar" className="rectangle-bar"></div>
      <div id="rectangle-gr-1" className="rectangle-gr-1"></div>
      <div id="rect-1a" className="rect-1"></div>
      <div id="rectangle-bar-1" className="rectangle-bar"></div>
      <div id="rectangle-bar-2" className="rectangle-bar"></div>
      <img id="cupnormal-1" className="beerPlasticCup" src={beerPlasticCup} />
      <img className="imagenormal-1" src={imagenormal} />
      <span className="order-cost">${norm_cost}.00</span>
      <span className="order-num">Qty: {norm_count}</span>
      <span className="orig-text-1">Heineken Original</span>
      <span className="abv-normal-1">ABV 5%</span>
      <span className="subtotal">Subtotal</span>
      <span className="order-cost-1">${norm_cost}.00</span>
      <Button color="success" onClick={navigateToOrderConf} idTag="ord-conf">
        Order Now
      </Button>
    </div>
  );
}
