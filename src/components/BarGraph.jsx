import React from "react";

function BarGraph(props) {

let frontHeight = props.front + "px";
let backHeight = props.back + "px";
let dbHeight = props.db + "px";

if (props.front > 100){
  frontHeight = ((props.front) * 0.00011) +'px';
} 
if ((props.back) > 100){
  backHeight = ((props.back) * 0.00011) +'px';
}
if (props.db > 100) {
  dbHeight = (props.db * 0.00011) + 'px';
}
if (props.front < 30){
  frontHeight = ((props.front) * 3) +'px';
} 
if ((props.back) < 30){
  backHeight = ((props.back) * 3) +'px';
}
if (props.db < 30) {
  dbHeight = (props.db * 3) + 'px';
}

  return (
    <ul className="barGraph">
      <div>
        <li
          className="front"
          style={{ height: frontHeight, lineHeight: frontHeight}}
        >
          {props.front}
        </li>
      </div>
      <div>
        <li
          className="back"
          style={{ height: backHeight, lineHeight: backHeight }}
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
