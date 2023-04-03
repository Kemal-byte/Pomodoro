import { createTheme, ThemeProvider } from "@mui/material";
import { useState, useMemo, createContext } from "react";
import colors from "./colors";

const ThemeCover = ({ children }) => {
  const [colorPallete, setcolorPallete] = useState<any>(colors);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: colorPallete.primaryYellow,
          },
          text: {
            primary: "#fff",
            disabled: "red",
          },
        },
      }),
    [colorPallete]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeCover;
// #FF9D16
