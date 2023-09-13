import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { srch , Searchh  } from './Redux/Actions/action'


function Search() {

const [search, setsearch] = useState(true)
const Disptach=useDispatch()
const handleClick=()=>{
  setsearch(!search)
  Disptach(srch(search))
}
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onClick={handleClick}
        />
      is done
      </label>
      <input
      onChange={(e)=>Disptach(Searchh(e.target.value))}
    type="text"
    placeholder="search"
    className="search-input"/>
    
    </div>
  )
}

export default Search