import axios from "axios";
import tokenService from "./tokenService";

const GET_PROFILE = "GET_PROFILE";

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/"))
    .then(({ token }) => tokenService.setToken(token))
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// export const createProfile = function(profileData) {
//   return fetch("/api/profile", {
//     method: "POST",
//     headers: new Headers({ "Content-Type": "application/json" }),
//     body: profileData
//   })
//     .then(res => {
//       if (res.ok) return res.json();
//       throw new Error("Bad Credentials!");
//     })
//     .then(({ token }) => tokenService.setToken(token));
// }
