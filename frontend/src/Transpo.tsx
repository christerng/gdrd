import * as React from "react";
import Button from "./components/Button";
import "./Transpo.css";
import rectangle from "./assets/rectangle.svg";
import systemstatusBar from "./assets/systemstatusBar.svg";
import clipPathGroup8 from "./assets/clipPathGroup8.svg";
import publicTransport from "./assets/publicTransport.svg";
import car from "./assets/car.png";
import heinekenLogoPng from "./assets/heinekenLogoPng.png";
import { useNavigate } from "react-router-dom";

const Transpo = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
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
          <div className="rectangle-1">
            <div className="valet">
              <div className="flex-container-2">
                <img className="car" src={car} />
              </div>
              <div className="clip-path-group-9">
                <div className="group-6" />
              </div>
              <img className="clip-path-group-8" src={clipPathGroup8} />
              <div className="clip-path-group-6">
                <div className="group-5" />
              </div>
              <div className="clip-path-group-5">
                <div className="group-4" />
              </div>
              <div className="clip-path-group-3">
                <div className="group-2" />
              </div>
              <div className="clip-path-group-2">
                <div className="group-1" />
              </div>
              <div className="clip-path-group-1">
                <div className="group" />
              </div>
            </div>
            <div className="flex-container-3">
              <span className="when-you-drink-never-drive">
                When You Drink Never Drive
              </span>
              <Button color="success" onClick={navigateToHome} idTag="button1">
                Valet Service
              </Button>
            </div>
          </div>
          <div className="rectangle-2">
            <img className="public-transport" src={publicTransport} />
            <div className="flex-container-4">
              <span className="not-behind-the-wheels">
                Not Behind the Wheels
              </span>
              <Button color="success" onClick={navigateToHome} idTag="button2">
                Public Transport
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transpo;
