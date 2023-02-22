import { TextField } from "@mui/material";
import "./index.css";
import { styled } from "@mui/system";

const StyledInput = styled(TextField, {
  name: "InputFields",
})({ width: "120px !important" });

export default ({ state, dispatch }) => {
  const handleChange = (tip: string, val: any) => {
    console.log(state);
    dispatch({ type: tip, payload: val });
  };
  console.log(state);
  return (
    <div className="input__container">
      <StyledInput
        variant="outlined"
        id="number-of-sets"
        InputLabelProps={{ sx: { color: "#fff" } }}
        inputProps={{ min: 1, max: 60 }}
        error={state.sets > 60 || state.sets < 1 ? true : false}
        helperText={(state.sets > 60 || state.sets < 0) && "1-60"}
        disabled={state.started}
        label="Sets"
        type="number"
        value={state.sets || 1}
        placeholder="0-60"
        onChange={(e) =>
          handleChange("numberOf_reps", parseInt(e.target.value))
        }
      />
      <StyledInput
        variant="outlined"
        id="break-timer"
        InputLabelProps={{ sx: { color: "#fff" } }}
        inputProps={{ min: 0, max: 60 }}
        error={state.break > 60 || state.break < 0 ? true : false}
        helperText={(state.break > 60 || state.break < 0) && "1-60"}
        disabled={state.started}
        label="Break"
        type="number"
        value={state.break || 1}
        placeholder="0-60"
        onChange={(e) =>
          handleChange("duration_breaks", parseInt(e.target.value))
        }
      />
      <StyledInput
        variant="outlined"
        id="Tag-name"
        InputLabelProps={{ sx: { color: "#fff" } }}
        inputProps={{ maxLength: 10, readOnly: state.started }}
        error={state.tags && state.tags?.length > 14 ? true : false}
        helperText={state.tags && state.tags?.length > 10 && "max 10 char."}
        disabled={state.started}
        label="Tags"
        type="text"
        value={state.tags}
        placeholder="Reading"
        onChange={(e) => handleChange("naming_tag", e.target.value)}
      />
    </div>
  );
};
