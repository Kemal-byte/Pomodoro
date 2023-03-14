import "./App.css";
import Main from "./components";
import "@tremor/react/dist/esm/tremor.css";
import "react-toastify/dist/ReactToastify.css";
import ThemeCover from "./utilities/commonCss/theme";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeCover>
      <Main />
      <ToastContainer />
    </ThemeCover>
  );
}

export default App;
