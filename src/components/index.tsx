import React from "react";
import Navbar from "./navbar";
import Inputs from "./Inputs";
import Timer from "./Timer";
import Tasks from "./tasks";
import styled from "styled-components";
// @ts-ignore
import Colors from "../utilities/commonCss/colors";
import { Box } from "@mui/material";
import Blob1 from "../assets/Blob1.svg";
import Blob2 from "../assets/Blob2.svg";

const ContainerMain = styled.main`
  text-align: center;
  color: ${Colors.primaryYellow};
  background-color: ${Colors.primaryBG};
  height: 100%;
  padding-top: 4rem;
  position: relative;
  overflow: hidden;
`;
const Container = styled.section`
  width: 500px;
  margin: auto;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  position: relative;
  z-index: 100;
`;

export default () => {
  return (
    <ContainerMain>
      <Box sx={{ position: "absolute", top: "0px" }}>
        <img src={Blob1} alt="" />
      </Box>
      <Container>
        <Navbar />
        <Inputs />
        <Timer />
        <Tasks />
      </Container>
      <Box sx={{ position: "absolute", bottom: "0px", right: "0px" }}>
        <img src={Blob2} alt="" />
      </Box>
    </ContainerMain>
  );
};
