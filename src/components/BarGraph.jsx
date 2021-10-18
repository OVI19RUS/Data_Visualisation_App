import React from "react";

function BarGraph(props) {

let frontHeight = props.front + "px";
let backHeight = props.back + "px";
let dbHeight = props.db + "px";
let frontMargin = props.back + props.db + "px";

if (props.front > 100){
  frontHeight = ((props.front) * 0.000113) +'px';
} 
if ((props.back) > 100){
  backHeight = ((props.back) * 0.000113) +'px';
}
if (props.db > 100) {
  dbHeight = (props.db * 0.000113) + 'px';
}
if ((props.back && props.db) > 100){
  frontMargin = (props.back + props.db) * 0.000113 + "px";
}
if (props.front < 30){
  frontHeight = ((props.front) * 6) +'px';
} 
if ((props.back) < 30){
  backHeight = ((props.back) * 6) +'px';
}
if (props.db < 30) {
  dbHeight = (props.db * 6) + 'px';
}
if ((props.back && props.db) < 30){
  frontMargin = ((props.back + props.db) * 6) + "px";
}

  return (
    <ul className="barGraph">
      <div>
        <li
          className="front"
          style={{ height: frontHeight, lineHeight: frontHeight, marginBottom: frontMargin}}
        >
          {props.front}
        </li>
      </div>
      <div>
        <li
          className="back"
          style={{ height: backHeight, lineHeight: backHeight,  marginBottom: dbHeight }}
        >
          {props.back}
        </li>
      </div>
      <div>
        <li className="db" style={{ height: dbHeight, lineHeight: dbHeight }}>
          {props.db}
        </li>
      </div>
    </ul>
  );
}

export default BarGraph;
