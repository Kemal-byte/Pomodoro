import BarChart from "./column";
import Pie from "./piechart";

import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import useData from "../../hooks/useData";
export default () => {
  const [readData, setReadData] = useState();
  const [timeFrame, setTimeFrame] = useState("weekly");
  const { yearlyData, monthlyData, weeklyData, allData, cleanData } = useData();

  return (
    <div>
      <Box>
        <Button onClick={() => setTimeFrame("monthly")}>Yearly</Button>
        <Button onClick={() => setTimeFrame("weekly")}>Montly</Button>
        <Button onClick={() => setTimeFrame("daily")}>Weekly</Button>
      </Box>
      <BarChart
        info={readData}
        timeFrame={timeFrame}
        yearlyData={yearlyData}
        monthlyData={monthlyData}
        weeklyData={weeklyData}
        allData={allData}
        cleanData={cleanData}
      />
      <Pie
        info={readData}
        timeFrame={timeFrame}
        yearlyData={yearlyData}
        monthlyData={monthlyData}
        weeklyData={weeklyData}
        allData={allData}
      />
    </div>
  );
};
