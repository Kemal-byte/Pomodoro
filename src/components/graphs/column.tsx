import React, { useEffect, useState } from "react";
import { BarChart, Card } from "@tremor/react";

export default ({ info, timeFrame, yearlyData, monthlyData, weeklyData }) => {
  // console.log(yearlyData());
  const dete = yearlyData();
  const aylikVeri = monthlyData();
  const haftalikVeri = weeklyData();
  const cleanAylik = aylikVeri?.filter(
    (item) => item.week !== "monthlyCategories"
  );
  const cleanWeekly = haftalikVeri?.filter(
    (item) =>
      item.dayName !== "weeklyCategories" && item.dayName !== "weeklyTotal"
  );

  return (
    <>
      {timeFrame === "monthly" && (
        <BarChart
          data={dete}
          dataKey="month"
          categories={["monthlyTotal"]}
          colors={["blue"]}
          marginTop="mt-6"
          yAxisWidth="w-12"
        />
      )}
      {timeFrame === "weekly" && (
        <BarChart
          data={cleanAylik}
          dataKey="week"
          categories={["duration"]}
          colors={["blue"]}
          marginTop="mt-6"
          yAxisWidth="w-12"
        />
      )}
      {timeFrame === "daily" && (
        <BarChart
          data={cleanWeekly}
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
