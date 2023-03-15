import React from "react";
import { DonutChart } from "@tremor/react";

export default ({ info, timeFrame }) => {
  const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ];
  const monthData = [
    {
      name: "Ocak",
      sales: 500,
    },
    {
      name: "Subat",
      sales: 500,
    },
    {
      name: "Mart",
      sales: 900,
    },
    {
      name: "Apr",
      sales: 777,
    },
    {
      name: "May",
      sales: 580,
    },
    {
      name: "Jun",
      sales: 590,
    },
    {
      name: "July",
      sales: 150,
    },
    {
      name: "Aug",
      sales: 300,
    },
    {
      name: "Sep",
      sales: 400,
    },
    {
      name: "Oct",
      sales: 700,
    },
    {
      name: "Nov",
      sales: 200,
    },
    {
      name: "Dec",
      sales: 100,
    },
  ];
  const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <DonutChart
      data={monthData}
      category="sales"
      dataKey="name"
      variant="pie"
      valueFormatter={valueFormatter}
      marginTop="mt-6"
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
  );
};
