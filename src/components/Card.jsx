import React from "react";

function Card(props){

let TestDev =  props.test__data - props.dev__data;
let DevProd =  props.prod_data - props.test__data;

const renderTestDevButton = () => {
  if (TestDev > 0){
    return(<button className='success'>
      <i className="arrow up"></i>
      {TestDev}
    </button>)
  } else if (TestDev < 0){
    return(<button className='failure'>
      <i className="arrow down"></i>
      {TestDev}
    </button>)
  } else if (TestDev === 0){
    return(<button className='unchanged'>
      {TestDev}
    </button>)
  }}

  const renderDevProdButton = () => {
    if (DevProd > 0){
      return(<button className='success'>
        <i className="arrow up"></i>
        {DevProd}
      </button>)
    } else if (DevProd < 0){
      return(<button className='failure'>
        <i className="arrow down"></i>
        {DevProd}
      </button>)
    } else if (DevProd === 0){
      return(<button className='unchanged'>
        {DevProd}
      </button>)
    }}


return(
    <div className="buttons">
      <div className="first">
        {renderTestDevButton()}
      </div>
      <div className="second">
        {renderDevProdButton()}
      </div>
    </div>
)
}
export default Card;
