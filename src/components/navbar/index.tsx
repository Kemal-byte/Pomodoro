import React from "react";
import Navbar, { NavItems } from "./index.styled.jsx";
import Gear from "../../assets/Gear.svg";
import ChartPie from "../../assets/ChartPie.svg";
import Profile from "../../assets/Profile.svg";

type Props = {
  graph: boolean;
  setGraph: React.Dispatch<React.SetStateAction<boolean>>;
};

export default ({ graph, setGraph }: Props) => {
  const handleGraph = () => {
    setGraph((graph) => !graph);
  };

  return (
    <Navbar>
      <NavItems onClick={handleGraph}>
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
