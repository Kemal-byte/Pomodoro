import React from "react";
import Navbar, { NavItems } from "./index.styled.jsx";
import Gear from "../../assets/Gear.svg";
import ChartPie from "../../assets/ChartPie.svg";
import Profile from "../../assets/Profile.svg";

export default () => {
  return (
    <Navbar>
      <NavItems>
        <img src={ChartPie} alt="" />
      </NavItems>
      <NavItems>
        <img src={Profile} alt="" />
      </NavItems>
      <NavItems>
        <img src={Gear} alt="" />
      </NavItems>
    </Navbar>
  );
};
