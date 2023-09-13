import { createStore } from "redux";
import { TodoReducers } from "./Reducres/Reducer";

export const store=createStore( TodoReducers ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())