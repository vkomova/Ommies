import React, { Component } from "react";
import userService from "../../utils/userService";
import profileService from "../../utils/profileService";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

class ViewProfile extends Component {
  state = {
    user: null,
    profile: null
  };

  async componentDidMount() {
    const currentprofile = await profileService.getProfile();
    const currentuser = await userService.getUser();
    this.setState({
      user: currentuser,
      profile: currentprofile
    });
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
        <div className="Mainfeed">
          <h3>Current Profile:</h3>
          {this.state.profile ? (
            <div>
              {this.state.profile.handle ? (
                <>
                  <p>Handle: {this.state.profile.handle}</p>
                </>
              ) : (
                <p>No handle entered.</p>
              )}
              {this.state.profile.location ? (
                <>
                  <p>Location: {this.state.profile.location}</p>
                </>
              ) : (
                <p>No location entered.</p>
              )}
              {this.state.profile.bio ? (
                <>
                  <p>Bio: {this.state.profile.bio}</p>
                </>
              ) : (
                <p>No bio entered.</p>
              )}
              {this.state.profile.instagram ? (
                <>
                  <p>Social: {this.state.profile.instagram}</p>
                </>
              ) : (
                <p>No Instagram info entered.</p>
              )}
              {this.state.profile.twitter ? (
                <>
                  <p>Social: {this.state.profile.twitter}</p>
                </>
              ) : (
                <p>No Twitter info entered.</p>
              )}
              {this.state.profile.github ? (
                <>
                  <p>Social: {this.state.profile.githu}</p>
                </>
              ) : (
                <p>No GitHub info entered.</p>
              )}
              {this.state.profile.linkedin ? (
                <>
                  <p>Social: {this.state.profile.linkedin}</p>
                </>
              ) : (
                <p>No LinkedIn info entered.</p>
              )}
              <br />
            </div>
          ) : (
            <span> </span>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default ViewProfile;
