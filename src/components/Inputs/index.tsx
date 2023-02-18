import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { TextField } from "@mui/material";
import React, { useReducer } from "react";

import Colors from "../../utilities/commonCss/colors";
import "./index.css";

export default ({ state, dispatch }) => {
  const handleChange = (tip: string, val: any) => {
    console.log(state);
    dispatch({ type: tip, payload: val });
  };
  return (
    <div className="input__container">
      <TextField
        label="Sets"
        error={state.sets > 60 || state.sets < 1 ? true : false}
        helperText={(state.sets > 60 || state.sets < 1) && "1-60"}
        id="outlined-size-normal"
        type="number"
        disabled={state.started}
        value={state.sets}
        inputProps={{ min: 1, max: 60, readOnly: state.started }}
        className="textfield__label"
        InputLabelProps={{ className: "textfield__label" }}
        onChange={(e) =>
          handleChange("numberOf_reps", parseInt(e.target.value))
        }
      />
      <TextField
        label="Break"
        id="outlined-size-normal"
        value={state.break || 0}
        disabled={state.started}
        type="number"
        error={state.break > 60 || state.break < 0 ? true : false}
        helperText={(state.break > 60 || state.break < 0) && "1-60"}
        inputProps={{ min: 0, max: 60, readOnly: state.started }}
        className="textfield__label"
        InputLabelProps={{ className: "textfield__label" }}
        onChange={(e) =>
          handleChange("duration_breaks", parseInt(e.target.value))
        }
      />
      <TextField
        label="Tags"
        id="outlined-size-normal"
        error={state.tags && state.tags?.length > 14 ? true : false}
        helperText={state.tags && state.tags?.length > 10 && "max 10 char."}
        value={state.tags || ""}
        className="textfield__label"
        InputLabelProps={{ className: "textfield__label" }}
        inputProps={{ maxLength: 10, readOnly: state.started }}
        onChange={(e) => handleChange("naming_tag", e.target.value)}
      />
    </div>
  );
};
