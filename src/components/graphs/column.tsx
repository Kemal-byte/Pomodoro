import React from "react";
import { BarChart } from "@tremor/react";

export default () => {
  const chartdata = [
    {
      name: "Mon",
      "Focus Time": 2488,
    },
    {
      name: "Tue",
      "Focus Time": 1445,
    },
    {
      name: "Wed",
      "Focus Time": 743,
    },
    {
      name: "Thu",
      "Focus Time": 743,
    },
    {
      name: "Fri",
      "Focus Time": 743,
    },
    {
      name: "Sat",
      "Focus Time": 743,
    },
    {
      name: "Sun",
      "Focus Time": 743,
    },
  ];

  return (
    <>
      <BarChart
        data={chartdata}
        dataKey="name"
        categories={["Focus Time"]}
        colors={["blue"]}
        marginTop="mt-6"
        yAxisWidth="w-12"
      />
    </>
  );
};
