import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Feed from "../../components/Feed/Feed";

const LandingPage = props => {
  return (
    <div className="LandingPage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />

      <h3>
        We Are{" "}
        <Link className="navbar-brand" to="/">
          Ommies
        </Link>
      </h3>
      <p className="lead">
        {" "}
        Create a profile and share helpful posts for dealing with everyday life
        and elevating your spirit with holistic methods.
      </p>

      <Feed />

    </div>
  );
};

export default LandingPage;
