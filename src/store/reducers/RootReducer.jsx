import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import Message from "./Message";

const RootReducer = combineReducers({
    AuthReducer,
    Message
})
export default RootReducer;