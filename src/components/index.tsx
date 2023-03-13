import React, { useState, useReducer, useEffect } from "react";
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
import Graphs from "./graphs";
import SettingComp from "./settings";
import reducer, { initialState } from "../reducer/reducer";
import authReducer from "../reducer/authReducer";
import userHook from "../hooks/userHook";

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
  let localState = JSON.parse(localStorage.getItem("myState"));
  let localUser = JSON.parse(localStorage.getItem("myUser"));
  const [graph, setGraph] = useState(false);
  const [settings, setSettings] = useState(false);
  let [state, dispatch] = useReducer(reducer, localState || initialState);
  console.log(state);
  const { setUserReducer } = userHook();

  /**
   * When the initial state is changed, we are updating the local storage.
   */
  useEffect(() => {
    localStorage.setItem("myState", JSON.stringify(state));
    if (localUser?.loggedIn) {
      // console.log("//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      // console.log(localUser);
      setUserReducer(localUser?.userId);
    }
  }, [state]);

  function offf() {
    let content;
    if (!graph && !settings) {
      content = (
        <>
          <Inputs state={state} dispatch={dispatch} />
          <Timer state={state} dispatch={dispatch} />
          <Tasks />
        </>
      );
    } else if (graph) {
      content = <Graphs />;
    } else if (settings) {
      content = <SettingComp />;
    }
    return content;
  }

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
        <Navbar
          setGraph={setGraph}
          setSettings={setSettings}
          settings={settings}
          graph={graph}
        />
        {offf()}
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
