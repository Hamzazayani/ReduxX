
import { ADD, DESC } from "../Const/const"
import { EditT } from "../Const/const"
import { checkk } from "../Const/const"

export const AddT= (desc,Done)=>{
    return {type:ADD ,payload: {description:desc,isdone:Done}}
}

export const ed= (desc,ID,done)=>{
    return {type:EditT ,payload: {desc,ID,done}}
}

export const srch= (Done)=>{
    return {type:checkk ,payload: {Done}}
}

export const Searchh=(desc)=>{
    return {type:DESC ,payload:{desc}}
    }