import tokenService from "./tokenService";

const BASE_URL = "/api/posts";

function getPosts() {
  return fetch(BASE_URL + "/viewallposts", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(res => {
    return res.json();
  });
}

export default {
  getPosts
};
