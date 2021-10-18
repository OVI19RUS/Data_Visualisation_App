import React from "react";
import BarGraph from "./BarGraph";

function Prod(props) {
  return (
    <div className="prod">
      <BarGraph front={props.prod__front} back={props.prod__back} db={props.prod__db}/>
      <p className="bar__name">prod</p>
    </div>
  );
}

export default Prod;
