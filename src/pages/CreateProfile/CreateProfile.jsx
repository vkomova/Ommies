import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../../components/TextFieldGroup/TextFieldGroup";
import TextAreaFieldGroup from "../../components/TextAreaFieldGroup/TextAreaFieldGroup";
import { createProfile } from "../../utils/profileService";
import userService from "../../utils/userService";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

import "./CreateProfile.css";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      handle: "",
      location: "",
      bio: "",
      instagram: "",
      twitter: "",
      github: "",
      linkedin: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    const user = userService.getUser();
    this.setState({ user });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      user: this.state.user._id,
      handle: this.state.handle,
      location: this.state.location,
      bio: this.state.bio,
      instagram: this.state.instagram,
      twitter: this.state.twitter,
      github: this.state.github,
      linkedin: this.state.linkedin
    };
    this.props.createProfile(profileData, this.props.history);
    this.props.history.push("/");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        {this.state.user ? (
          <div className="NavBar">
            <Link to="/" className="NavBar-link">
              HOME
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/posts" className="NavBar-link">
              ADD POST
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
        <div className="Profile">
          <h3>Manage Your Profile</h3>

          <form onSubmit={this.onSubmit}>
            <TextFieldGroup
              placeholder="Profile Handle"
              name="handle"
              value={this.state.handle}
              onChange={this.onChange}
              info="A unique handle for your profile URL."
            />
            <TextFieldGroup
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.onChange}
              info="Where in the world you are located?"
            />
            <TextAreaFieldGroup
              placeholder="Short Bio"
              name="bio"
              value={this.state.bio}
              onChange={this.onChange}
              info="Tell us a little about yourself!"
            />
            <TextFieldGroup
              placeholder="Instagram Username"
              name="instagram"
              value={this.state.instagram}
              onChange={this.onChange}
              info="Add your insta username!"
            />
            <TextFieldGroup
              placeholder="Twitter Username"
              name="twitter"
              value={this.state.twitter}
              onChange={this.onChange}
              info="Add your twitter!"
            />
            <TextFieldGroup
              placeholder="Github Username"
              name="github"
              value={this.state.github}
              onChange={this.onChange}
              info="Add your Github and show us your work!"
            />
            <TextFieldGroup
              placeholder="LinkedIn Username"
              name="linkedin"
              value={this.state.linkedin}
              onChange={this.onChange}
              info="Add your LinkedIn!"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-info btn-block mt-4"
            />
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
