import React from 'react';

const GameResultsSection = ({results}) => {
    const result = results[results.length - 1].result;
    const player_choice = results[results.length - 1].player_choice;
    const computer_choice = results[results.length - 1].computer_choice;

    if (results.length > 10) {
        results = (results.length % 10 === 0) ? results.slice(Math.floor(results.length / 10)) : results.slice(results.length % 10); // figure out what to add so it doesn't cut off after every multiple
    }
    return (
        <div>

        <div>
            <h1>{`You played ${player_choice} and the computer played ${computer_choice}. You ${result}.`}</h1>
        </div>
        <div>
            <ol>
                {results.map((game_round) => {
                    return (<li>
                        {"Result: " + game_round.result}
                    </li>)
                })}
            </ol>
        </div>
        </div>
    )
}

export default GameResultsSection;