import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9D16",
    },
    text: {
      primary: "#fff",
      disabled: "red",
    },
  },
});

const ThemeCover = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeCover;
