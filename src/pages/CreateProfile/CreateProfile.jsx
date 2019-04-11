import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../../components/TextFieldGroup/TextFieldGroup";
import TextAreaFieldGroup from "../../components/TextAreaFieldGroup/TextAreaFieldGroup";
import { createProfile } from "../../utils/profileService";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      bio: this.state.bio,
      instagram: this.state.instagram,
      twitter: this.state.twitter,
      github: this.state.github,
      linkedin: this.state.linkedin
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Manage Your Profile</h1>

        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* Profile Handle"
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
            info="Where in the world you are located"
          />
          <TextAreaFieldGroup
            placeholder="Short Bio"
            name="bio"
            value={this.state.bio}
            onChange={this.onChange}
            info="Tell us a little about yourself"
          />
          <TextFieldGroup
            placeholder="Instagram Username"
            name="instagramusername"
            value={this.state.instagramusername}
            onChange={this.onChange}
            info="Add your insta username"
          />
          <TextFieldGroup
            placeholder="Twitter Username"
            name="twittersername"
            value={this.state.twitterusername}
            onChange={this.onChange}
            info="Add your twitter"
          />
          <TextFieldGroup
            placeholder="Instagram Username"
            name="githubusername"
            value={this.state.githubusername}
            onChange={this.onChange}
            info="Add your Github and show us your work!"
          />
          <TextFieldGroup
            placeholder="LinkedIn Username"
            name="linkedinusername"
            value={this.state.linkedinusername}
            onChange={this.onChange}
            info="Add your LinkedIn"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
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

// export default CreateProfile;
