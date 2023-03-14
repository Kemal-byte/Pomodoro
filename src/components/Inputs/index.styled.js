import { styled } from "@mui/system";
import { InputLabel, TextField } from "@mui/material";
export const StyledInput = styled(TextField, {
  name: "InputFields",
})({ width: "120px !important" });
export const StyledInputLabel = styled(InputLabel, {
  name: "InputLable",
})({ color: "#fff" });
