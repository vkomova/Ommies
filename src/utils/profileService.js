import axios from "axios";
import tokenService from "./tokenService";

const GET_PROFILE = "GET_PROFILE";

export const createProfile = (profileData, history) => dispatch => {
  return axios
    .post("/api/profile", profileData, {
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    })
    .then(response => response)
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};
