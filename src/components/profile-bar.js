import React from "react";
import { connect } from "react-redux";
import "./profile-bar.css";

function ProfileBar(props) {
  return (
    <nav role="section" className="profile-bar">
      <button
        type="button"
        name="logout"
        className="profile-bar-item"
        onClick={() => {
          props.logout();
        }}
      >
        logout
      </button>

      <strong className="profile-bar-item profile-details">
        {props.currentProfile.user.username}
      </strong>
      {/* <strong className="profile-bar-item profile-details">
        Highest Round: {props.currentProfile.user.highestRound}
      </strong> */}
    </nav>
  );
}

const mapStateToProps = state => ({
  currentProfile: state.profile
});
export default connect(mapStateToProps)(ProfileBar);
