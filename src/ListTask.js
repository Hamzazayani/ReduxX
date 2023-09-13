import { useSelector } from 'react-redux'
import Task from './Task'
import React from 'react'

function ListTask() {

const info=useSelector(state=>state.data)
console.log(info);
return (
    <div>
    {info.map((el) => <Task props={el} />)}
    </div>
)
}

export default ListTask