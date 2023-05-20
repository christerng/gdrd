import * as React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import "./Select2.css";
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import f1GrandPrixMap from "./assets/f1GrandPrixMap.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import line from "./assets/line.svg";

export default function App() {
  const navigate = useNavigate();
  const navigateToSelect0 = () => {
    navigate("/Select0");
  };
  const navigateToSelect1 = () => {
    navigate("/Select1");
  };
  const navigateToSelect3 = () => {
    navigate("/Select3");
  };
  const navigateToSelect4 = () => {
    navigate("/Select4");
  };
  const navigateToSelect5 = () => {
    navigate("/Select5");
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
      <div className="flex-container-1x">
        <img className="f-1-grand-prix-mapx" src={f1GrandPrixMap} />
        <div className="cat-absolute-container-1">
          <div id="rectangle-5-x-2" className="rectangle-5x">
            <span className="zone-1-market-street">Zone 1 - Coconut Grove</span>
          </div>
          <img className="line-1-2" src={line} />
        </div>
      </div>
      <span className="select-bar-to-orderx">Select bar to order from:</span>
      <Button color="light" onClick={navigateToSelect1} idTag="select-button-1">
        Zone 1 - Market Street: &gt; 30 mins
      </Button>
      <Button
        color="success"
        onClick={navigateToSelect0}
        idTag="select-button-2x"
      >
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
      </Button>

      <Button color="success" onClick={navigateToSelect1} idTag="cont-button">
        Continue to Order
      </Button>
    </div>
  );
}
