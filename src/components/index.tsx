import { useState } from "react";
import Navbar from "./navbar";

import { ContainerMain, Container } from "./index.styled";
// @ts-ignore
import { Box } from "@mui/material";
import Blob1 from "../assets/Blob1.svg";
import Blob2 from "../assets/Blob2.svg";
import Main from "./Main";
import WelcomeSection from "./welcome";
import Footer from "./footer";

export default () => {
  const [graph, setGraph] = useState(false);
  const [settings, setSettings] = useState(false);

  return (
    <>
      <ContainerMain>
        <Box
          sx={{
            position: "absolute",
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
          <Main graph={graph} settings={settings} />
        </Container>
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            zIndex: "2",
            pointerEvents: "none",
          }}
        >
          <img src={Blob2} alt="" />
        </Box>
      </ContainerMain>
      <WelcomeSection />
      <Footer />
    </>
  );
};
