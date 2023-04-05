import Navbar, { NavItems } from "./index.styled.jsx";
import Gear from "../../assets/Gear.svg";
import ChartPie from "../../assets/ChartPie.svg";
import LoginModal from "../modals/login.js";

export default ({ graph, setGraph, setSettings, settings }) => {
  const handleGraph = (e) => {
    const { id } = e.target;
    //TODO: Depending on which navbar button is clicked toggle between different components.
    // console.log(id);
    if (id === "chart") {
      setSettings(false);
      setGraph(!graph);
    } else if (id === "settings") {
      setGraph(false);
      setSettings(!settings);
    }
  };

  return (
    <Navbar>
      <NavItems onClick={(e) => handleGraph(e)} id="chart">
        <img src={ChartPie} alt="Charts icon button" id="chart" />
      </NavItems>
      <LoginModal />
      <NavItems onClick={(e) => handleGraph(e)} id="settings">
        <img src={Gear} alt="Settings section" id="settings" />
      </NavItems>
    </Navbar>
  );
};
