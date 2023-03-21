import { DonutChart } from "@tremor/react";
import { useEffect, useState } from "react";

const PieComponent = ({ timeFrame, cleanData }) => {
  const [localState, setLocalState] = useState();

  useEffect(() => {
    if (timeFrame === "weekly") {
      setLocalState(cleanData?.weeklyPie);
    } else if (timeFrame === "monthly") {
      setLocalState(cleanData?.montlyPie);
    } else {
      setLocalState(cleanData?.yearlyPie);
    }
  }, [timeFrame]);
  console.log(localState);
  if (!localState) {
    return <div>Loading...</div>;
  }
  return (
    <DonutChart
      data={localState}
      category="duration"
      dataKey="study"
      variant="pie"
      marginTop="mt-6"
      colors={["violet", "indigo", "rose", "cyan", "amber"]}
    />
  );
};

export default PieComponent;
