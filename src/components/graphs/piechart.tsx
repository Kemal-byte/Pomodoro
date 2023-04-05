import { DonutChart } from "@tremor/react";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import {
  PieLegend,
  PieFlex,
  PieLegendItem,
  PieLegendContainer,
  DonutContainer,
} from "./index.styled.jsx";

const PieComponent = ({ timeFrame, cleanData }) => {
  const [localState, setLocalState] = useState(cleanData[timeFrame]);
  const myColorsArray: Array<String> = [
    "#8b5cf6",
    "#6366f1",
    "#f43f5e",
    "#06b6d4",
    "#f59e0b",
    "#10b981",
  ];
  useEffect(() => {
    if (timeFrame === "weekly") {
      setLocalState(cleanData?.weeklyPie);
    } else if (timeFrame === "monthly") {
      setLocalState(cleanData?.montlyPie);
    } else {
      setLocalState(cleanData?.yearlyPie);
    }
  }, [timeFrame, cleanData]);
  if (!localState) {
    return <div>Loading...</div>;
  }
  return (
    <PieFlex>
      <DonutContainer>
        <DonutChart
          data={localState}
          category="duration"
          dataKey="study"
          variant="pie"
          marginTop="mt-6"
          colors={["violet", "indigo", "rose", "cyan", "amber", "emerald"]}
        />
      </DonutContainer>
      <PieLegendContainer>
        <PieLegend>
          {localState.map((item) => (
            <PieLegendItem key={item.study}>
              <Typography
                sx={{
                  color: `${myColorsArray[localState.indexOf(item)]}`,
                  fontWeight: "bold",
                }}
              >
                {`${item.study} - ${item.duration}`}
              </Typography>
            </PieLegendItem>
          ))}
        </PieLegend>
      </PieLegendContainer>
    </PieFlex>
  );
};

export default PieComponent;
