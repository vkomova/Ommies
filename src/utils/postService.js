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

function submitPost(post) {
  fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post)
  })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(post) {
      console.log("success");
    })
    .catch(function(err) {
      console.log(err);
    });
}

export default {
  getPosts,
  deletePost,
  submitPost
};
