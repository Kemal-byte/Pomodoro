import React, { useEffect, useState } from "react";
import { BarChart, Card } from "@tremor/react";

export default ({
  info,
  timeFrame,
  yearlyData,
  monthlyData,
  weeklyData,
  allData,
}) => {
  // console.log(yearlyData());
  const dete = yearlyData();
  const [ay, setAy] = useState();
  let aylikVeri;

  const haftalikVeri = weeklyData();
  let cleanAylik;
  const cleanWeekly = haftalikVeri?.filter(
    (item) =>
      item.dayName !== "weeklyCategories" && item.dayName !== "weeklyTotal"
  );
  useEffect(() => {
    if (!allData) return;
    monthlyData()
      .then((data) => {
        cleanAylik = data?.filter((item) => item.week !== "monthlyCategories");
        console.log(cleanAylik);
        setAy(cleanAylik);
      })
      .catch((err) => console.log(err));
  }, [allData]);

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
          data={ay}
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
