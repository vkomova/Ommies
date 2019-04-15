import axios from "axios";
import tokenService from "./tokenService";

const GET_PROFILE = "GET_PROFILE";
const BASE_URL = "/api/profile";

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

function getProfile() {
  return fetch(BASE_URL + "/view", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(res => {
    return res.json();
  });
}

export default {
  getProfile
};
