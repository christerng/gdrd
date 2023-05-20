import * as React from "react";
import "./SafariBottom.css";
import rectangle6 from "../assets/rectangle6.svg";
import Safari from "./Safari";
const SafariBottom = (props: {
  safari: {
    safariIcons: string,
    iconssafarirefresh: string,
    applecom: string,
    iconssafaritextSize: string,
    iconssafarilock: string,
  },
  className?: string,
}) => {
  return (
    <div className={`safari-bottom ${props.className || ""}`}>
      <img className="rectangle-6" src={rectangle6} />
      <Safari className="safari-bottom-instance-3" {...props.safari} />
    </div>
  );
};
export default SafariBottom;
