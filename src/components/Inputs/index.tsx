import { TextField } from "@mui/material";
import React, { useReducer } from "react";
import reducer, { initialState } from "../../reducer/reducer";
import Colors from "../../utilities/commonCss/colors";
import "./index.css";

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="input__container">
      <TextField
        label="Sets"
        error={state.sets > 60 || state.sets < 1 ? true : false}
        helperText={(state.sets > 60 || state.sets < 1) && "1-60"}
        id="outlined-size-normal"
        defaultValue=""
        type="number"
        value={state.sets}
        inputProps={{ min: 1, max: 60 }}
        className="textfield__label"
        InputLabelProps={{ className: "textfield__label" }}
        onChange={(e) =>
          dispatch({ type: "numberOf_reps", payload: Number(e.target.value) })
        }
      />
      <TextField
        label="Break"
        id="outlined-size-normal"
        value={state.break}
        defaultValue=""
        type="number"
        error={state.break > 60 || state.break < 0 ? true : false}
        helperText={(state.break > 60 || state.break < 0) && "1-60"}
        inputProps={{ min: 0, max: 60 }}
        className="textfield__label"
        InputLabelProps={{ className: "textfield__label" }}
        onChange={(e) =>
          dispatch({ type: "duration_breaks", payload: Number(e.target.value) })
        }
      />
      <TextField
        label="Tags"
        id="outlined-size-normal"
        error={state.tags && state.tags?.length > 14 ? true : false}
        helperText={state.tags && state.tags?.length > 14 && "max 14 char."}
        value={state.tags}
        defaultValue=""
        className="textfield__label"
        InputLabelProps={{ className: "textfield__label" }}
        onChange={(e) =>
          dispatch({
            type: "naming_tag",
            payload: e.target.value.toUpperCase(),
          })
        }
      />
    </div>
  );
};
