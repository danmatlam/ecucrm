
import { combineReducers } from "redux";
import contactosReducer from './contactosReducer'

export default combineReducers({
    contactosState: contactosReducer,
})