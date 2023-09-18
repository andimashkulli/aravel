import { combineReducers } from "redux";
// import {reducer as formReducer} from 'redux-form';
import ticketReducer from "./ticketReducer";
export default combineReducers({
    ticket:ticketReducer
});