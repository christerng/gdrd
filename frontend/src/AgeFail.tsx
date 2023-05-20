import * as React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import "./AgeFail.css";
import rectangle from "./assets/rectangle.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import group from "./assets/group.svg";

export default function App() {
  const navigate = useNavigate();

  const navigateToEnter = () => {
    navigate("/");
  };
  return (
    <div className="main-page-beer-no">
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
          <img className="group" src={group} />
          <span className="the-age-for-beer-adventures-is-y">
            The age for beer adventures is yet to come. Stay patient, and cheers
            to future hoppy memories!
          </span>
          <Button color="light" onClick={navigateToEnter} idTag="backbutton">
            Back to Home
          </Button>
          <span className="please-note-that-the-purchase-of">
            Please note that the purchase of alcohol is restricted to
            individuals aged 18 years and above.
          </span>
        </div>
      </div>
    </div>
  );
}
