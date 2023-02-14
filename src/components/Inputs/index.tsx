import { TextField } from "@mui/material";
import React from "react";
import Colors from "../../utilities/commonCss/colors";
import "./index.css";

export default () => {
  return (
    <div className="input__container">
      <TextField
        label="Sets"
        id="outlined-size-normal"
        defaultValue=""
        className="textfield__label"
        InputLabelProps={{ className: "textfield__label" }}
      />
      <TextField
        label="Break"
        id="outlined-size-normal"
        defaultValue=""
        className="textfield__label"
        InputLabelProps={{ className: "textfield__label" }}
      />
      <TextField
        label="Tags"
        id="outlined-size-normal"
        defaultValue=""
        className="textfield__label"
        InputLabelProps={{ className: "textfield__label" }}
      />
    </div>
  );
};
