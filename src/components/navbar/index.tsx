import React from "react";
import Navbar, { NavItems } from "./index.styled.jsx";
import Gear from "../../assets/Gear.svg";
import ChartPie from "../../assets/ChartPie.svg";
import Profile from "../../assets/Profile.svg";

export default ({ graph, setGraph, setSettings, settings }) => {
  const handleGraph = (e) => {
    // console.log(e.target.id);
    const { id } = e.target;

    //TODO: Depending on which navbar button is clicked toggle between different components.
    console.log(id);
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
      <NavItems onClick={(e) => handleGraph(e)} id="profile">
        <img src={Profile} alt="Login to your profile" id="profile" />
      </NavItems>
      <NavItems onClick={(e) => handleGraph(e)} id="settings">
        <img src={Gear} alt="Settings section" id="settings" />
      </NavItems>
    </Navbar>
  );
};
