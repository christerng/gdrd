import * as React from "react";
import Button from "./components/Button";
import "./Screen2.css";
import map from "./assets/map.svg";
import rectangle from "./assets/rectangle.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import beer from "./assets/beer.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {
  const navigate = useNavigate();

  const navigateToAgeCheck = () => {
    navigate("/AgeCheck");
  };

  const navigateToSelf = () => {
    navigate("/");
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
          <div className="rectangle-1">
            <img className="beer" src={beer} />
            <div className="flex-container-2">
              <span className="take-me-to-the-fast-lane">
                Take me to the Fast Lane
              </span>
              <Button
                color="success"
                onClick={navigateToAgeCheck}
                idTag="button1"
              >
                Where to get beer?
              </Button>
            </div>
          </div>
          <div className="rectangle-2">
            <img className="map" src={map} />
            <div className="flex-container-3">
              <span className="im-done-for-the-day">I am done for the day</span>
              <Button color="success" onClick={navigateToSelf} idTag="button2">
                Get home safe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Screen2;
