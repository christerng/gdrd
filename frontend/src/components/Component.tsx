import * as React from "react";
import "./Component.css";
const Component = (props: {
  krxootqztzxwe: string,
  num1: string,
  abv: string,
  num: string,
  cup: string,
  heinekenOriginal: string,
  yzwfgvmuixzlz: string,
  className?: string,
}) => {
  return (
    <div className={`component ${props.className || ""}`}>
      <div className="rectangle">
        <span className="heineken-original">
          {props.heinekenOriginal || "Heineken Original"}
        </span>
        <div className="flex-container-2">
          <div className="flex-container-3">
            <span className="abv-5">{props.abv || "ABV 5%"}</span>
            <span className="cup-1400">{props.cup || "Cup - $14.00"}</span>
          </div>
          <span className="num-000">{props.num || "$0.00"}</span>
        </div>
        <div className="flex-container-4">
          <div className="rectangle-1">
            <span className="wnetaaekghpyn">{props.yzwfgvmuixzlz || "-"}</span>
          </div>
          <span className="num-0">{props.num1 || "0"}</span>
          <div className="rectangle-2">
            <span className="qxicahrpceorf">{props.krxootqztzxwe || "+"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
