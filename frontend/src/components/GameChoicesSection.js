import React from "react";
import GameChoice from "./GameChoice";

export class GameChoicesSection extends React.Component {
  state = { data: [] };

  componentDidMount() {
    fetch("http://localhost:5000/choices")
      .then(HandleResponse)
      .then(json_response => {
        this.setState({ data: json_response });
      })
      .catch(response_error => {
        console.log(`There was an error: ${response_error}`);
      });
  }

  render() {
    return (
      <div>
          {this.state.data.map(choice => (
            <GameChoice
              key={choice.id}
              id={choice.id}
              name={choice.name}
              onClick={() => this.props.onClick(choice.id)}
            />
          ))}
      </div>
    );
  }
}

// Can change HandleResponse to custom behavior if desired, also can move this out if other components want to use a response handler
export const HandleResponse = incoming_response => {
  // Assuming standard HTTP status codes (via MDN)
  if (incoming_response.status >= 200 && incoming_response.status <= 299) {
    return incoming_response.json();
  } else {
    throw Error(
      `Error with response: Status: ${incoming_response.status} Reason: ${incoming_response.statusText}`
    );
  }
};
