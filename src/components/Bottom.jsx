import React from "react";

function Bottom(){
    return(
        <div className="bottom">
      <div>
        <div className="box front__color"></div>
        Клиентская часть
      </div>
      <div>
        <div className="box back__color"></div>
        Серверная часть
      </div>
      <div>
        <div className="box db_color"></div>
        База данных
      </div>
    </div>
    )
}

export default Bottom;