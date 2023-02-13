import { TextField } from "@mui/material";
import React from "react";
import Colors from "../../utilities/commonCss/colors";

export default () => {
  return (
    <div>
      Inputs tsx
      <TextField
        label="Size"
        id="outlined-size-normal"
        defaultValue=""
        sx={{ borderColor: "red" }}
      />
    </div>
  );
};
