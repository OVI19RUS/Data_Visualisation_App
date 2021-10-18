import React from "react";
import BarGraph from "./BarGraph";

function Dev(props) {
  return (
    <div className="dev">
    <BarGraph front={props.dev__front} back={props.dev__back} db={props.dev__db}/>
      <p className="bar__name">dev</p>
    </div>
  );
}

export default Dev;
