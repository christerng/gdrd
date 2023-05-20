import * as React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import "./AgeCheck.css";
import systemstatusBar from "./assets/systemstatusBar.svg";
import rectangle from "./assets/rectangle.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";

export default function App() {
  const navigate = useNavigate();

  const navigateToEnter = () => {
    navigate("/Select0");
  };
  const navigateToFail = () => {
    navigate("/AgeFail");
  };
  return (
    <div className="main-page-beer">
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
          <span className="are-you-18-years-old-above">
            Are you 18 years old &amp; above?
          </span>
          <div className="flex-container-2">
            <Button color="light" onClick={navigateToFail} idTag="nobutton">
              No
            </Button>
            <Button color="light" onClick={navigateToEnter} idTag="yesbutton">
              Yes
            </Button>
          </div>
          <span className="please-note-that-the-purchase-of-1">
            Please note that the purchase of alcohol is restricted to
            individuals aged 18 years and above.
          </span>
        </div>
      </div>
    </div>
  );
}
