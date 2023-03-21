import React, { useEffect, useState } from "react";
import { DonutChart } from "@tremor/react";

const PieComponent = ({ timeFrame, cleanData }) => {
  if (!cleanData?.montlyPie) {
    return <div>Loading...</div>;
  }
  console.log(cleanData);
  return (
    <>
      {timeFrame == "yearly" && (
        <DonutChart
          data={cleanData.yearlyPie}
          category="duration"
          dataKey="study"
          variant="pie"
          marginTop="mt-6"
          colors={["violet", "indigo", "rose", "cyan", "amber"]}
        />
      )}
      {timeFrame == "monthly" && (
        <DonutChart
          data={cleanData.montlyPie}
          category="duration"
          dataKey="study"
          variant="pie"
          marginTop="mt-6"
          colors={["violet", "indigo", "rose", "cyan", "amber"]}
        />
      )}
      {timeFrame == "weekly" && (
        <DonutChart
          data={cleanData.weeklyPie}
          category="duration"
          dataKey="study"
          variant="pie"
          marginTop="mt-6"
          colors={["violet", "indigo", "rose", "cyan", "amber"]}
        />
      )}
    </>
  );
};

export default PieComponent;
