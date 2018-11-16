import React, { Component } from "react";
import MainMenu from "./components/main-menu";
import CharacterCreate from "./components/character-create";
import BattlePage from "./components/battle/battle-page";
import VictoryPage from "./components/battle/victory-page";
import DeathPage from "./components/battle/death-page";
import "./App.css";
import { connect } from "react-redux";

// @connect(state => ({page: state.game.page}))
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTutorial: true
    };
  }

  componentDidMount() {
    this.setState({
      showTutorial: true
    });
  }

  toggleTutorial(bool) {
    this.setState({
      showTutorial: bool
    });
  }

  render() {
    let tutorialStatus = "";
    let mainMenuStatus = "hidden";
    if (!this.state.showTutorial) {
      tutorialStatus = "hidden";
      mainMenuStatus = "";
    }
    if (this.props.page === "character") {
      return (
        <div className="app">
          <CharacterCreate />
        </div>
      );
    }
    if (this.props.page === "battle") {
      return (
        <div className="app">
          <BattlePage />
        </div>
      );
    }
    if (this.props.page === "victory") {
      return (
        <div className="app">
          <VictoryPage />
        </div>
      );
    }
    if (this.props.page === "death") {
      return (
        <div className="app">
          <DeathPage />
        </div>
      );
    }
    return (
      <div className="app">
        <div className={`tutorial ${tutorialStatus}`}>
          <h2>TUTORIAL</h2>
          <p>Into The Maw is an RPG with rock paper scissors at its core!</p>
          <p>
            Prepare for battle by allocating stats! An exchange is made each
            time you select rock paper or scissors. If you lose an exchange, you
            take damage equal to the difference between your attack and the
            <br />
            See how many battles you can win before the goblins claim you!
          </p>

          <button
            onClick={() => {
              this.toggleTutorial(false);
            }}
          >
            Close Tutorial
          </button>
        </div>
        <div className={`mainmenu ${mainMenuStatus}`}>
          <MainMenu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page.currentPage
});

export default connect(mapStateToProps)(App);
