import BarChart from "./column";
import Pie from "./piechart";

import { useState } from "react";
import { Box, Button } from "@mui/material";
import useData from "../../hooks/useData";
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
      <BarChart timeFrame={timeFrame} cleanData={cleanData} />
      <Pie timeFrame={timeFrame} cleanData={cleanData} />
    </div>
  );
};
