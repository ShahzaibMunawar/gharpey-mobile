import { createStore, combineReducers, applyMiddleware } from "redux";
import cartItem from "../reducers/cartItem";
import { composeWithDevTools } from "redux-devtools-extension";

export default store = createStore(cartItem);
