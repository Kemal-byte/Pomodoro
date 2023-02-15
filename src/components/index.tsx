import React, { useState } from "react";
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
import Graps from "./graphs";

const ContainerMain = styled.main`
  text-align: center;
  color: ${Colors.primaryYellow};
  background-color: ${Colors.primaryBG};
  height: 100%;
  width: 100%;
  padding-top: 4rem;
  position: relative;
  overflow: auto;
`;
const Container = styled.section`
  width: 500px;
  margin: auto;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 545px) {
    width: 90%;
  }
`;

export default () => {
  const [graph, setGraph] = useState(false);
  return (
    <ContainerMain>
      <Box
        sx={{
          position: "fixed",
          top: "0px",
          zIndex: "2",
          pointerEvents: "none",
        }}
      >
        <img src={Blob1} alt="" />
      </Box>
      <Container>
        <Navbar setGraph={setGraph} graph={graph} />
        {graph ? (
          <>
            <Graps />
          </>
        ) : (
          <>
            <Inputs />
            <Timer />
            <Tasks />
          </>
        )}
      </Container>
      <Box
        sx={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          zIndex: "2",
          pointerEvents: "none",
        }}
      >
        <img src={Blob2} alt="" />
      </Box>
    </ContainerMain>
  );
};
