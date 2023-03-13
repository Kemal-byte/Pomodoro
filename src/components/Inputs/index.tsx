import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./index.css";
import { styled } from "@mui/system";
import { useState } from "react";

const StyledInput = styled(TextField, {
  name: "InputFields",
})({ width: "120px !important" });
const StyledInputLabel = styled(InputLabel, {
  name: "InputLable",
})({ color: "#fff" });

export default ({ state, dispatch }) => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState(["Study", "Reading", "Math", "Gym"]);

  const handleChange = (tip: string, val: any) => {
    console.log(state);
    dispatch({ type: tip, payload: val });
  };

  const handleChangeSelect = (event) => {
    setTag(event.target.value as string);
    dispatch({ type: "naming_tag", payload: event.target.value as string });
  };

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
        inputProps={{ min: 1, max: 60 }}
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
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <StyledInputLabel id="demo-simple-select-label">
            Tags
          </StyledInputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tag}
            label="Tags"
            onChange={handleChangeSelect}
          >
            {tags.map((item) => {
              return (
                <MenuItem value={item} sx={{ color: "#000" }} key={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
