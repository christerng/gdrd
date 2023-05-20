/* import * as React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import systemstatusBar from "./assets/systemstatusBar.svg";
import rectangle from "./assets/rectangle.svg";

export default function App() {
  const navigate = useNavigate();

  const navigateToEnter = () => {
    navigate("/Screen2");
  };
  return (
    <div className="main-page-getting-home">
      <div className="flex-container">
        <img className="systemstatus-bar" src={systemstatusBar} />
        <div className="cat-absolute-container">
          <span className="num-1222">17:30</span>
        </div>
      </div>
      <div className="flex-container-1">
        <img className="rectangle" src={rectangle} />
        <div className="cat-absolute-container-1">
          <img className="heineken-logo-png" src={heinekenLogoPng} />
          <Button color="light" onClick={navigateToEnter} idTag="enterbutton">
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
} */

import * as React from "react";
import Button from "./components/Button";
import "./Home.css";
import map from "./assets/map.svg";
import rectangle from "./assets/rectangle.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import beer from "./assets/beer.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToAgeCheck = () => {
    navigate("/AgeCheck");
  };

  const navigateToTranspo = () => {
    navigate("/Transpo");
  };

  return (
    <div className="main-page">
      <div className="flex-container">
        <img className="systemstatus-bar" src={systemstatusBar} />
        <div className="cat-absolute-container">
          <span className="num-1222">17:30</span>
        </div>
      </div>
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
              <Button
                color="success"
                onClick={navigateToAgeCheck}
                idTag="button3"
              >
                Where to get beer?
              </Button>
            </div>
          </div>
          <div className="rectangle-2a">
            <img className="map" src={map} />
            <div className="flex-container-3">
              <span className="im-done-for-the-day">I am done for the day</span>
              <Button
                color="success"
                onClick={navigateToTranspo}
                idTag="button4"
              >
                Get home safe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
