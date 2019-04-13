import React, { Component } from "react";
import userService from "../../utils/userService";
import "./Feed.css";
import Posts from "../Posts/Posts";
import { getPosts } from "../../utils/postService";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      user: null,
      posts: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var post = {
      text: this.state.text,
      user: this.state.user
    };

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
    this.setState({ text: "" });
  }

  async componentDidMount() {
    const currentuser = userService.getUser();
    this.setState({
      user: currentuser
    });
  }

  render() {
    return (
      <div className="field">
        <form onSubmit={this.handleSubmit} method="POST">
          <label>
            <br />
            <br />
            Recource:
            <br />
            <br />
            <textarea
              name="text"
              value={this.state.text}
              placeholder="Add your tips and tricks for holistic health"
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Feed;
