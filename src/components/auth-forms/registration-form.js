import React from "react";
import { connect } from "react-redux";

import {
  endRegistration,
  fetchRegistration,
  setErrorMessage
} from "../../actions/profile-actions";

class RegistrationForm extends React.Component {
  render() {
    if (this.props.currentProfile.userCreated === true) {
      return (
        <div>
          <strong>Account Successfully Created!</strong>
          <button onClick={() => this.endRegistration()}>
            Return to Login
          </button>
        </div>
      );
    }
    return (
      <form>
        <label htmlFor="username">
          <strong>Username</strong>
        </label>
        <input
          type="text"
          name="username"
          id="username"
          ref={input => (this.username = input)}
          required
        />

        <label htmlFor="password">
          <strong>Password</strong>
        </label>
        <input
          type="text"
          name="password"
          id="password"
          ref={input => (this.password = input)}
          required
        />

        <label htmlFor="confirm-password">
          <strong>Confirm Password</strong>
        </label>
        <input
          type="text"
          name="confirm-password"
          id="confirm-password"
          ref={input => (this.confirmPassword = input)}
          required
        />

        <strong class="error-message">
          {this.props.currentProfile.errorMessage}
        </strong>
        <button type="submit">Create Your Account</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentProfile: state.profile
});
export default connect(
  mapStateToProps,
  { endRegistration, fetchRegistration, setErrorMessage }
)(RegistrationForm);
