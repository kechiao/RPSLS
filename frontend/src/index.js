import React from "react";
import ReactDOM from "react-dom";
import GameResultsSection from "./components/GameResultsSection";
import {
  GameChoicesSection,
  HandleResponse
} from "./components/GameChoicesSection";
import GameSettingsSection from "./components/GameSettingsSection";

class Game extends React.Component {
  constructor(props) {
    // always need to call super and pass in props
    super(props);
    this.state = {
      game_number: 0,
      game_results: [
        { result: null, player_choice: null, computer_choice: null }
      ]
    };
  }

  // GameChoice will call this method with an id associated to a move. HandleChoice will
  // POST to the api with the move and store into the state the result.
  HandleChoice(id) {
    fetch("http://localhost:5000/play", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        player: id
      })
    })
      .then(HandleResponse)
      .then(json_response => {
        this.setState({
          game_number: this.state.game_number + 1,
          game_results: this.state.game_results.concat([
            {
              result: json_response.results,
              player_choice: this.ConvertIdToStringChoice(json_response.player),
              computer_choice: this.ConvertIdToStringChoice(
                json_response.computer
              )
            }
          ])
        });
        console.log(this.state.game_results);
      })
      .catch(response_error => {
        console.log(`There was an error: ${response_error}`);
      });
  }

  // Will get a random choice from backend and simply call HandleChoice with the returned random id.
  HandleRandom() {
    fetch("http://localhost:5000/choice")
      .then(HandleResponse)
      .then(json_response => {
        this.HandleChoice(json_response.id);
      })
      .catch(response_error => {
        console.log(`There was an error: ${response_error}`);
      });
  }

  HandleReset() {
    this.setState({
      game_number: 0,
      game_results: [
        { result: null, player_choice: null, computer_choice: null }
      ]
    });
  }

  // So we can display the correct choice to the user.
  ConvertIdToStringChoice(id) {
    const choices = {
      1: "Rock",
      2: "Paper",
      3: "Scissors",
      4: "Lizard",
      5: "Spock"
    };
    return choices[id];
  }

  render() {
    return (
      <>
        <GameResultsSection results={this.state.game_results} />
        <GameChoicesSection
          onClick={id => this.HandleChoice(id)}
        ></GameChoicesSection>
        <GameSettingsSection onClick={() => this.HandleRandom()} HandleReset={() => this.HandleReset()}/>
      </>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
