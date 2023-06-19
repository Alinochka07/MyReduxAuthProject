import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import Message from "./Message";

const rootReducer = combineReducers({
    AuthReducer,
    Message
})
export default rootReducer