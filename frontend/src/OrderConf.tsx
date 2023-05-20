import * as React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import "./OrderConf.css";
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import cheers from "./assets/cheers.svg";

export default function OrderSummary() {
  var norm_count = sessionStorage.getItem("var01");
  var norm_cost = sessionStorage.getItem("var02");
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
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
      <span className="order-confirmed">Order Confirmed</span>
      <span className="summary-1">Summary</span>
      <span className="order-conf-1">Order Confirmation</span>
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
        <span>0</span>
      </div>
      <div className="giant-num" id="giant-num-2">
        <span>1</span>
      </div>
      <div className="giant-num" id="giant-num-3">
        <span>4</span>
      </div>
      <div className="giant-num" id="giant-num-4">
        <span>5</span>
      </div>
      <span className="curr-wait">
        Current Waiting Time: &#160;
        <span className="time-est"> &gt; 20 mins</span>
      </span>
      <Button color="success" onClick={navigateToHome} idTag="home-button">
        Back to Home
      </Button>
    </div>
  );
}
