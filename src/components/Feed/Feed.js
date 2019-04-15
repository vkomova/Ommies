import React, { Component } from "react";
import userService from "../../utils/userService";
import postService from "../../utils/postService";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Feed.css";

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
    postService.submitPost(post);
    this.props.history.push("/");
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
      <>
        {this.state.user ? (
          <div>
            <Link to="/" className="NavBar-link">
              HOME
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/viewprofile" className="NavBar-link">
              VIEW PROFILE
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/profile" className="NavBar-link">
              MANAGE PROFILE
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className="NavBar-welcome">
              🌿Welcome {this.state.user.name} 🌿
            </span>
          </div>
        ) : (
          <span> </span>
        )}
        <br />
        <br />
        <div className="field Postfield">
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
            &nbsp;&nbsp;&nbsp; or
            <Link to="/" className="NavBar-link">
              Cancel
            </Link>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Feed;
