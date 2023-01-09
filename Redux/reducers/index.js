import { combineReducers } from "redux";
import productReducers, { getUserSignupData, logIn, userDetails } from "./auth";
import { Stock } from "./stock";
import { transaction } from "./transaction";

import { vender } from "./vender";

const reducer = combineReducers({
  logIn: logIn,
  getUserSignupData: getUserSignupData,
  userDetails: userDetails,
  vender: vender,
  Transaction: transaction,
  Product: Stock,
});

export default reducer;
