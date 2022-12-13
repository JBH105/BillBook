import { combineReducers } from "redux";
// import { signUp } from "../actions";
import productReducers, {
  logIn,
} from "./auth";

const reducer = combineReducers({
  logIn: logIn,
});

export default reducer;
