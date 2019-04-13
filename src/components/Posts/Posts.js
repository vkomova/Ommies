import React, { Component } from "react";
import { connect } from "react-redux";
import postService from "../../utils/postService";
import PostFeed from "./PostFeed";
import axios from "axios";
import NavBar from "../NavBar/NavBar";

class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const posts = await postService.getPosts();
    this.setState({ posts });
    console.log(this.state);
    console.log(posts);
  }

  render() {
    console.log(this.state.posts);

    return (
      <>
        <NavBar />
        {this.state.posts ? (
          this.state.posts.map(p => <p>{p.text}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

export default Posts;
