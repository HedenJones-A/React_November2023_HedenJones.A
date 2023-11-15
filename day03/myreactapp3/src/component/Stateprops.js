import React, {useState} from "react";

function Stateprops(){
    const [buttonname,setButtonname]=useState(false);
    const toggleHandler=()=>{
        
        setButtonname(!buttonname);
    }

    return(

        <div>
            <h1>Dashboard</h1>
            <hr></hr>
            <button onClick={toggleHandler}>
               {buttonname?"Hide message":"Show message"}
            </button>
            {buttonname && <p>Hi! how are you</p>}
        </div>
    );
}
export default Stateprops; 