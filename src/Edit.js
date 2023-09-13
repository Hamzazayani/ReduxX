import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ed } from './Redux/Actions/action';


function Edit() {
  const obj=useParams(); 
  const modification=useSelector(state=>state.data.find(el=>el.id==obj.id))


  const navigate=useNavigate()
  const [taskEdit,settaskEdit] = useState(modification.description)
  const [done, setdone] = useState(modification.isdone)
  const Disptach=useDispatch()
const handleClick=()=>{
  Disptach(ed(taskEdit,obj.id,done))

}
  return (
    <div>
    <h2>Edit Task</h2>

    <input onChange={(e)=>settaskEdit(e.target.value)}
      type="text"
     defaultValue={taskEdit}
    />
    <label>
      <input
        type="checkbox"
      onClick={(e)=>setdone(!done)}
defaultChecked={done}
      />
      Is Done
    </label>
    <Link  to={"/"}  ><button  onClick={handleClick} style={{backgroundColor:"bisque"}}  >Edit </button></Link>
  </div>

  )
}

export default Edit