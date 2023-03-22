import React, { useState } from "react";
import SetContainer, { SetItem, Title } from "./index.styled";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../Inputs/index.css";
import { StyledInput } from "../Inputs/index.styled";
import { globalUser } from "../../../firebase/firebase";
import { addNewTag } from "../../../firebase/database";
import { Button } from "@mui/material";

export default () => {
  console.log(globalUser);
  //TODO: Auto-Start, Sound settings, Colors
  const [auto, setAuto] = useState(true);
  const [age, setAge] = React.useState("");
  const [newTag, setNewTag] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <SetContainer>
      <h2>Settings</h2>
      <SetItem>
        <Title>Auto Start</Title>
        <FormControlLabel
          control={<Switch checked={auto} />}
          onClick={() => setAuto(!auto)}
          label={auto ? "On" : "Off"}
        />
      </SetItem>
      <SetItem>
        <Title>Select a sound</Title>
        <FormControlLabel
          control={<Switch checked={auto} />}
          onClick={() => setAuto(!auto)}
          label={auto ? "On" : "Off"}
        />
      </SetItem>
      <SetItem>
        <Title>Colors</Title>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sounds</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Sounds"
              onChange={handleChange}
            >
              <MenuItem value={10} selected>
                Ten
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </SetItem>
      <SetItem>
        <Title>Add a tag</Title>
        <StyledInput
          variant="outlined"
          id="number-of-sets"
          InputLabelProps={{ sx: { color: "#fff" } }}
          error={newTag.length > 3}
          helperText={newTag.length > 3 && "Max 3 characters"}
          disabled={globalUser == "" ? true : false}
          label="New Tag"
          type="text"
          value={newTag}
          placeholder="Ex. Biology"
          onChange={(e) => setNewTag(e.target.value)}
        />
      </SetItem>
      <Button
        variant="contained"
        disabled={globalUser == "" ? true : false}
        onClick={() => addNewTag(newTag)}
      >
        Save
      </Button>
    </SetContainer>
  );
};
