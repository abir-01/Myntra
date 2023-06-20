import setitem from "./setitem";
import addremoveitem from "./addremoveitem";
// import removeitem from "./removeitem";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    setitem,
    addremoveitem
})


export default rootReducer;