import * as React from "react";
import "./Safari.css";
import iconssafaritextSize from "../assets/iconssafaritextSize.svg";
import iconssafarilock from "../assets/iconssafarilock.svg";
import iconssafarirefresh from "../assets/iconssafarirefresh.svg";
import safariIcons from "../assets/safariIcons.svg";
const Safari = (props: {
  safariIcons: string,
  iconssafarirefresh: string,
  applecom: string,
  iconssafaritextSize: string,
  iconssafarilock: string,
  className?: string,
}) => {
  return (
    <div className={`safari ${props.className || ""}`}>
      <div className="bar-bg">
        <div className="safari-bar-input">
          <img
            className="iconssafaritext-size"
            src={props.iconssafaritextSize || iconssafaritextSize}
          />
          <div className="address">
            <img
              className="iconssafarilock"
              src={props.iconssafarilock || iconssafarilock}
            />
            <span>{props.applecom || "heinken-F1&#x2F;bar-locations.com"}</span>
          </div>
          <img
            className="iconssafarirefresh"
            src={props.iconssafarirefresh || iconssafarirefresh}
          />
        </div>
        <img className="safari-icons" src={props.safariIcons || safariIcons} />
      </div>
    </div>
  );
};
export default Safari;
