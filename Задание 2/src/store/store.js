import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { redusers } from "./redusers";
import { reduser } from "./reduser";

const rootReducer = combineReducers({users: redusers, user: reduser})
export const store = createStore(rootReducer, applyMiddleware(thunk))