import React from "react";
import { Link } from "react-router-dom";


function Task({props}) {
    return (
    <div className="task">
        <h6 className="task-id">id:{props.id}</h6>
        <p className="task-description">des:{props.description}</p>
        <Link  to={`/edit/${props.id}`}   ><button   style={{backgroundColor:"red"}}  >Edit</button></Link>
     <input type="checkbox" className="task-checkbox" checked={props.isdone} />
    
    </div>
    );
}




export default Task