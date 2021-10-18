import React from "react";

function Norm(props) {

  let normHeight = props.norm + 'px';
  if (props.norm > 200){
    normHeight = props.norm * 0.00013 + 'px'
  }
  if (props.norm < 20){
    normHeight = props.norm * 9 + 'px'
  }
  
  const renderNormButton = () => 
  {
    if (props.norm === 0)
    {
      return(<p>{props.norm}</p>)
    } else {
      return(<p className="text__white-back">{props.norm}</p>)
    }}

  return (
    <div className="norm">
      <ul className="barGraph">
        <li className="norm__bar" style ={{height:normHeight, lineHeight: normHeight}}>
          {renderNormButton()}
        </li>
      </ul>
      <p class="bar__name">norm</p>
    </div>
  );
}

export default Norm;

