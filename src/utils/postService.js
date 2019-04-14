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

function deletePost(post) {
  const options = {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(post)
  };
  return fetch(BASE_URL + "/deletepost", options).then(res => res.json());
}

export default {
  getPosts,
  deletePost
};
