import BarChart from "./column";
import Pie from "./piechart";

import { useState } from "react";
import { Box, Button } from "@mui/material";
import useData from "../../hooks/useData";
import { globalUser } from "../../../firebase/firebase";
import DataImg from "../../assets/DataHolder.png";
import PlaceHolderContainer, { PlaceHolderImg } from "./index.styled.jsx";
export default () => {
  const [timeFrame, setTimeFrame] = useState("weekly");
  const { cleanData } = useData();

  return (
    <div>
      <Box>
        <Button onClick={() => setTimeFrame("yearly")}>Yearly</Button>
        <Button onClick={() => setTimeFrame("monthly")}>Montly</Button>
        <Button onClick={() => setTimeFrame("weekly")}>Weekly</Button>
      </Box>
      {!globalUser ? (
        <>
          <PlaceHolderContainer>
            <h3>Login to see your track</h3>
            <PlaceHolderImg src={DataImg} alt="" />
          </PlaceHolderContainer>
        </>
      ) : (
        <>
          <BarChart timeFrame={timeFrame} cleanData={cleanData} />
          <Pie timeFrame={timeFrame} cleanData={cleanData} />
        </>
      )}
    </div>
  );
};
