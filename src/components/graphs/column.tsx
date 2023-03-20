import React, { useEffect, useState } from "react";
import { BarChart, Card } from "@tremor/react";

export default ({
  info,
  timeFrame,
  yearlyData,
  monthlyData,
  weeklyData,
  allData,
  cleanData,
}) => {
  useEffect(() => {
    console.log("WeeklyPie is honey", cleanData);
  }, [cleanData]);

  if (!cleanData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {timeFrame === "monthly" && (
        <BarChart
          data={cleanData.yearly}
          dataKey="month"
          categories={["monthlyTotal"]}
          colors={["blue"]}
          marginTop="mt-6"
          yAxisWidth="w-12"
        />
      )}
      {timeFrame === "weekly" && (
        <BarChart
          data={cleanData.monthly}
          dataKey="week"
          categories={["duration"]}
          colors={["blue"]}
          marginTop="mt-6"
          yAxisWidth="w-12"
        />
      )}
      {timeFrame === "daily" && (
        <BarChart
          data={cleanData.weekly}
          dataKey="dayName"
          categories={["duration"]}
          colors={["blue"]}
          marginTop="mt-6"
          yAxisWidth="w-12"
        />
      )}
    </>
  );
};
