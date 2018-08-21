import React from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../../actions/profile-actions";

class LoginForm extends React.Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.fetchLogin({
            username: this.username.value,
            password: this.password.value
          });
        }}
      >
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          ref={input => (this.username = input)}
          name="username"
          required
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          ref={input => (this.password = input)}
          name="password"
          required
        />

        <button type="submit">Login</button>
      </form>
    );
  }
}

export default connect(
  null,
  {
    fetchLogin
  }
)(LoginForm);
