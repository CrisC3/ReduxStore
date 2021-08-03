import { combineReducers } from "redux";

import cartReducer from "./Cart"

const reducers = combineReducers({ cartReducer });

export default reducers;