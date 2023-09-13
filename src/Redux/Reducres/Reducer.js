import { ADD, DESC,  } from "../Const/const"
import { EditT } from "../Const/const"
import { checkk } from "../Const/const"

const initialstate={

data:  [
        {id:0,
    description:"cyrine",
isdone:false
},
{id:1,
    description:"Hamza",
isdone:true
},

{id:2,
    description:"dawser",
isdone:true
}

]}

export const TodoReducers =(state=initialstate,action)=>{

    switch(action.type) {
        case ADD:
            return  {...state,data: [...state.data, {...action.payload,id:state.data.length}]}
        case EditT:
            return {...state,data:state.data.map((Task)=> Task.id == action.payload.ID ? {description:action.payload.desc,id:action.payload.ID,isdone:action.payload.done } : Task)}
        case checkk:
                return {...state,data:state.data.filter((el)=>el.isdone == action.payload.Done)}

                case DESC:
            return{...state,data:state.data.filter((el)=>el.description.toLowerCase().includes(action.payload.desc.toLowerCase()))}

default:
    return state
}
}
