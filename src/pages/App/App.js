import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import LandingPage from "../LandingPage/LandingPage";
import CreateProfile from "../CreateProfile/CreateProfile";
import userService from "../../utils/userService";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  constructor() {
    super();
    this.state = { user: null };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const user = userService.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Switch>
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route exact path="/profile" component={CreateProfile} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
