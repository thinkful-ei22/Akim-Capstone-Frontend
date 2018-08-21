import React from "react";
import { connect } from "react-redux";
import "./combat-log.css";

class CombatLog extends React.Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    return (
      <div id="battle-log" role="section">
        {this.props.battleLog.length === 0 ? (
          <li>begin the battle...</li>
        ) : (
          this.props.battleLog.map(log => {
            if (log === " ") {
              return <br />;
            } else {
              return <li>{log}</li>;
            }
          })
        )}
        {/*This is a dummy div for continuous scrolling in the log*/}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  battleLog: state.battle.combatLog
});

export default connect(mapStateToProps)(CombatLog);
