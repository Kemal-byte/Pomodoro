import "./App.css";
import Main from "./components";
import "@tremor/react/dist/esm/tremor.css";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

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
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
