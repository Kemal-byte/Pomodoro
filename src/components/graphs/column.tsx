import React, { useEffect, useState } from "react";
import { BarChart } from "@tremor/react";

export default ({ info, timeFrame, yearlyData, monthlyData, weeklyData }) => {
  console.log(yearlyData());
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
  const haftalik = [
    {
      name: "1.week",
      "Focus Time": 743,
    },
    {
      name: "2.week",
      "Focus Time": 1000,
    },
    {
      name: "3.week",
      "Focus Time": 1600,
    },
    {
      name: "4.week",
      "Focus Time": 500,
    },
  ];
  const monthData = [
    {
      name: "Ocak",
      "Focus Time": 500,
    },
    {
      name: "Subat",
      "Focus Time": 500,
    },
    {
      name: "Mart",
      "Focus Time": 900,
    },
    {
      name: "Apr",
      "Focus Time": 777,
    },
    {
      name: "May",
      "Focus Time": 580,
    },
    {
      name: "Jun",
      "Focus Time": 590,
    },
    {
      name: "July",
      "Focus Time": 150,
    },
    {
      name: "Aug",
      "Focus Time": 300,
    },
    {
      name: "Sep",
      "Focus Time": 400,
    },
    {
      name: "Oct",
      "Focus Time": 700,
    },
    {
      name: "Nov",
      "Focus Time": 200,
    },
    {
      name: "Dec",
      "Focus Time": 100,
      reading: 200,
    },
  ];

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
          data={cleanAylik || haftalik}
          dataKey="week"
          categories={["duration"]}
          colors={["blue"]}
          marginTop="mt-6"
          yAxisWidth="w-12"
        />
      )}
      {timeFrame === "daily" && (
        <BarChart
          data={cleanWeekly || chartdata}
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
