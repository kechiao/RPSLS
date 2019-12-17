import React from "react";

const GameResultsSection = ({ results }) => {
  let no_results = results.length === 0;
  let result,
    player_choice,
    computer_choice = 0;

  if (!no_results) {
    // Get the latest data

    result = results[results.length - 1].result;
    player_choice = results[results.length - 1].player_choice;
    computer_choice = results[results.length - 1].computer_choice;
  }

  // Get the latest 10 scores
  if (results.length > 10) {
    results = results.slice(results.length - 10, results.length);
  }
  return (
    <div>
      <div>
        <h1>
          {no_results
            ? "To begin the game, please select an option."
            : `You played ${player_choice} and the computer played ${computer_choice}. You ${result}.`}
        </h1>
      </div>
      <div>
        <h1>Scoreboard</h1>
        <ol>
          {!no_results
            ? results.map(game_round => {
                return <li>{"Result: " + game_round.result}</li>;
              })
            : ""}
        </ol>
      </div>
    </div>
  );
};

export default GameResultsSection;
