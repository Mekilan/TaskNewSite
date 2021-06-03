import { combineReducers } from "redux";
import productReducer from "./../reducers/productReducer";
import cookiereducer from "./../reducers/cookiereducer";

export default combineReducers({
  productlist: productReducer,
  cookiereducer:cookiereducer
});
