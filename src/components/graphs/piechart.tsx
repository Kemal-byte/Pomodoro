import React, { useEffect, useState } from "react";
import { DonutChart } from "@tremor/react";

const PieComponent = ({ timeFrame, cleanData }) => {
  if (!cleanData?.weeklyPie) {
    return <div>Loading...</div>;
  }
  return (
    <>
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
