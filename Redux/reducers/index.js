import { combineReducers } from "redux";
import productReducers, { getUserSignupData, logIn, userDetails } from "./auth";
import { transaction } from "./transaction";

import { vender } from "./vender";

const reducer = combineReducers({
  logIn: logIn,
  getUserSignupData: getUserSignupData,
  userDetails: userDetails,
  vender: vender,
  Transaction: transaction,
});

export default reducer;
