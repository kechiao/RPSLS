import React from "react";
import Button from "@material-ui/core/Button";

const GameSettingsSection = ({ onClick, HandleReset }) => {
  return (
    <div>
      <Button variant="contained" color="default" onClick={onClick}>
        Random
      </Button>
        <Button variant="contained" color="secondary" onClick={HandleReset}>
            Reset Scores
        </Button>
    </div>
  );
};

export default GameSettingsSection;
