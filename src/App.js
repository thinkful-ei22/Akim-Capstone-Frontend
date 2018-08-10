import React, { Component } from "react";
import MainMenu from "./components/main-menu";
import CharacterCreate from "./components/character-create";
import BattlePage from "./components/battle/battle-page";
import "./App.css";
import { connect } from "react-redux";

// @connect(state => ({page: state.game.page}))
class App extends Component {
  render() {
    if (this.props.page === "character") {
      return <CharacterCreate />;
    }
    if (this.props.page === "battle") {
      return <BattlePage />;
    }
    return <MainMenu />;
  }
}

const mapStateToProps = state => ({
  page: state.page.currentPage
});

export default connect(mapStateToProps)(App);
