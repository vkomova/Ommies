import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import LandingPage from "../LandingPage/LandingPage";
import CreateProfile from "../CreateProfile/CreateProfile";
import userService from "../../utils/userService";
import { Provider } from "react-redux";
import store from "./store";
import Feed from "../../../src/components/Feed/Feed";
import ViewProfile from "../ViewProfile/ViewProfile";

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
            render={({ history }) =>
              userService.getUser() ? (
                <LandingPage
                  handleLogout={this.handleLogout}
                  user={this.state.user}
                  history={history}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
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
            <Route
              exact
              path="/profile"
              render={({ history }) =>
                userService.getUser() ? (
                  <CreateProfile history={history} user={this.state.user} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/viewprofile"
              render={({ history }) =>
                userService.getUser() ? (
                  <ViewProfile history={history} user={this.state.user} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/posts"
              render={({ history }) =>
                userService.getUser() ? (
                  <Feed history={history} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
