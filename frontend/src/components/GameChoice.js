import React from "react";
import Button from "@material-ui/core/Button";

// Incoming destructured props will contain the type of object to render (rock, paper, scissors, etc)
const GameChoice = ({ id, name, onClick }) => {
  return (
      <Button variant="contained" color="primary" onClick={onClick}>
        {name}
      </Button>
  );
};

export default GameChoice;
