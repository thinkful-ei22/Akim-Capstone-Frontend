import React from "react";
import { connect } from "react-redux";

import { changePage } from "../actions/game-actions";
import { grantPlayerStatPoints } from "../actions/player-stat-actions";
import { beginRegistration } from "../actions/profile-actions";

import RegistrationForm from "./auth-forms/registration-form";
import LoginForm from "./auth-forms/login-form";
import ProfileBar from "./profile-bar";

class MainMenu extends React.Component {
  render() {
    if (this.props.currentProfile.loggedIn === true) {
      return (
        <main role="main">
          <ProfileBar />
          <h1>
            <p>Prepare to delve...</p>
            <br />
            <strong>INTO THE MAW</strong>
          </h1>
          <button
            name="start-button"
            onClick={e => {
              this.props.changePage("character");
              this.props.grantPlayerStatPoints(20);
            }}
            autoFocus
          >
            Start Game
          </button>
        </main>
      );
    } else if (this.props.currentProfile.userRegistering === true) {
      return (
        <main>
          <h1>CREATE YOUR ACCOUNT</h1>
          <RegistrationForm />
        </main>
      );
    }
    return (
      <main role="main">
        <h1>
          <p>Prepare to delve...</p>
          <br />
          <strong>INTO THE MAW</strong>
        </h1>
        <h2>Login</h2>
        <LoginForm />
        <p>or...</p>
        <button
          type="button"
          name="register"
          onClick={() => this.props.beginRegistration()}
        >
          Register
        </button>
      </main>
    );
  }
}
const mapStateToProps = state => ({
  currentProfile: state.profile
});
export default connect(
  mapStateToProps,
  { changePage, grantPlayerStatPoints, beginRegistration }
)(MainMenu);
