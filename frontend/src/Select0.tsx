import * as React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import "./Select0.css";
import menu from "./assets/menu.svg";
import sportsBar from "./assets/sportsBar.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import rectangle7 from "./assets/rectangle7.svg";
import f1GrandPrixMap from "./assets/f1GrandPrixMap.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";

export default function App() {
  const navigate = useNavigate();

  const navigateToSelect1 = () => {
    navigate("/Select1");
  };
  const navigateToSelect2 = () => {
    navigate("/Select2");
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
      </div>
      <span className="select-bar-to-orderx">Select bar to order from:</span>
      <Button color="light" onClick={navigateToSelect1} idTag="select-button-1">
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
      </Button>

      {/*       <Button color="secondary" onClick={navigateToSelect1} idTag="cont-button">
        Continue to Order
      </Button> */}
    </div>
  );
}