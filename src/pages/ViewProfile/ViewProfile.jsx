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
    console.log(currentprofile);
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
          <div>
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
          Current Profile: <br />
          <br />
          {this.state.profile ? (
            <div>
              <span>Handle: {this.state.profile.handle}</span>
              <br />
              <span>Location: {this.state.profile.location}</span>
              <br />
              <span>Bio: {this.state.profile.bio}</span>
              <br />

              {this.state.profile.social ? (
                <>
                  <span>Social: {this.state.profile.social}</span>
                  <br />
                </>
              ) : (
                <span> </span>
              )}
              <br />
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
