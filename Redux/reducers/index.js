import { combineReducers } from "redux";
// import { signUp } from "../actions";
import productReducers, {
  getUserSignupData,
  logIn,
} from "./auth";

const reducer = combineReducers({
  logIn: logIn,
  getUserSignupData: getUserSignupData
});

export default reducer;
