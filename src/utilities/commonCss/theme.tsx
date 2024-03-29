import { createTheme, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import colors from "./colors";

const ThemeCover = ({ children }) => {
  // const [colorPallete, setcolorPallete] = useState<any>(colors);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: colors.primaryYellow,
          },
          text: {
            primary: "#fff",
            disabled: "red",
          },
        },
      }),
    [colors]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeCover;
// #FF9D16
