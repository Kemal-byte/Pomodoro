import "./App.css";
import Main from "./components";
import "@tremor/react/dist/esm/tremor.css";

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
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
