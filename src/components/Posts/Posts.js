import React, { Component } from "react";
import { connect } from "react-redux";
import postService from "../../utils/postService";
import PostFeed from "./PostFeed";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import userService from "../../utils/userService";

class Posts extends Component {
  state = {
    user: null,
    posts: []
  };

  async componentDidMount() {
    const posts = await postService.getPosts();
    this.setState({ posts: posts });
    const currentuser = userService.getUser();
    this.setState({
      user: currentuser
    });
  }

  render() {
    return (
      <>
        {this.state.user ? (
          <span>Welcome {this.state.user.name}</span>
        ) : (
          <span>Feed</span>
        )}
        <br />
        <br />
        <div>
          Current Feed:
          {this.state.posts ? (
            this.state.posts.map(p => <p>{p.text}</p>)
          ) : (
            <p>Loading...</p>
          )}
          <br />
          <br />
        </div>
      </>
    );
  }
}

export default Posts;
