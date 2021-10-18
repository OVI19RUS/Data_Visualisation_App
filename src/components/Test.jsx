import React from "react";
import BarGraph from "./BarGraph";

function Test(props) {
  return (
    <div className="test">
    <BarGraph front={props.test__front} back={props.test__back} db={props.test__db}/>
      <p className="bar__name">test</p>
    </div>
  );
}

export default Test;
