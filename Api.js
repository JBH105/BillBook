import axios from "axios";
// url
//  const URL = "https://api.giantwhale.online/";
// // base url
//  const BASE_URL = URL

//  export default BASE_URL

export default axios.create({
  baseURL: "https://api.giantwhale.online",
  timeout: 1000,
//   headers: { "x-access-token": sessionStorage.getItem("x-access-token") },
});
