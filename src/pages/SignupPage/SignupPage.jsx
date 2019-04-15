import React, { Component } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import Footer from "../../components/Footer/Footer";
import "./SignupPage.css";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="Display">
        <div className="SignupPage">
          <h3>Sign Up:</h3>
          <SignupForm {...this.props} updateMessage={this.updateMessage} />
          <p>{this.state.message}</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignupPage;
