import React from "react";
import Navbar from "./navbar";
import Inputs from "./Inputs";
import Timer from "./Timer";
import Tasks from "./tasks";
import styled from "styled-components";
import Colors from "../utilities/commonCss/colors";

const ContainerMain = styled.main`
  text-align: center;
  color: ${Colors.primaryYellow};
  background-color: ${Colors.primaryBG};
  height: 100%;
`;
const Container = styled.section`
  width: 500px;
  margin: auto;
`;

export default () => {
  return (
    <ContainerMain>
      <Container>
        Main
        <Navbar />
        <Inputs />
        <Timer />
        <Tasks />
      </Container>
    </ContainerMain>
  );
};
