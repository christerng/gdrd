import * as React from "react";
import "./ZoneWaitingTime.css";
const ZoneWaitingTime = (props: {
  num30Mins: string,
  zone1CoconutGrove: string,
  className?: string,
}) => {
  return (
    <div className={`zone-waiting-time ${props.className || ""}`}>
      <div className="rectangle-1">
        <span className="zone-1-coconut-grove">
          {props.zone1CoconutGrove || "Zone 1 - Coconut Grove"}
        </span>
        <span className="num-30-mins-2">
          {props.num30Mins || "&gt; 30 mins"}
        </span>
      </div>
    </div>
  );
};
export default ZoneWaitingTime;
