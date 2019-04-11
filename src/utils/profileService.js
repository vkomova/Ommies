import axios from "axios";

const GET_PROFILE = "GET_PROFILE";

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};
