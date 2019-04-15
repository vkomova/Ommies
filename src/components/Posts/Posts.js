import React, { Component } from "react";
import { connect } from "react-redux";
import postService from "../../utils/postService";
import axios from "axios";
import Footer from "../Footer/Footer";
import userService from "../../utils/userService";
import "./Posts.css";

class Posts extends Component {
  state = {
    user: null,
    posts: []
  };

  handleDeletePost = async post => {
    const posts = [...this.state.posts];
    const updatedPosts = posts.filter(p => {
      return p._id !== post._id;
    });
    this.setState({ posts: updatedPosts });
    postService.deletePost(post);
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
          <span>🌿Welcome {this.state.user.name} 🌿</span>
        ) : (
          <span>Feed</span>
        )}
        <div className="Mainfeed">
          <h4>Current Feed:</h4>
          {this.state.posts && this.state.user ? (
            this.state.posts.map((p, i) => (
              <div className="Post" key={`post ${i}`}>
                <p key={`text ${i}`}>{p.text}</p>
                {p.user === this.state.user._id ? (
                  <button onClick={() => this.handleDeletePost(p)}>
                    DELETE POST
                  </button>
                ) : (
                  <p />
                )}
              </div>
            ))
          ) : (
            <p>Please login to see posts.</p>
          )}
          {this.state.posts.length < 1 ? (
            <p>
              No posts avaialble.
              <br />
            </p>
          ) : (
            <p />
          )}
        </div>
        <footer className="Postfooter">
          Copyright &copy; {new Date().getFullYear()} Ommies by Valerie Komova
        </footer>
      </>
    );
  }
}

export default Posts;
