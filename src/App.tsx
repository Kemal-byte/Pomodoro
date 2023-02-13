import "./App.css";
import Main from "./components";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9D16",
    },
    text: {
      primary: "#fff",
    },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            style: {
              border: "2px solid #fff",
              color: "red",
            },
          },
        },
      ],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
