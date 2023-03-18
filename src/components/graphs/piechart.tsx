import React, { useEffect, useState } from "react";
import { DonutChart } from "@tremor/react";

const PieComponent = ({
  // info,
  // timeFrame,
  yearlyData,
  monthlyData,
  weeklyData,
}) => {
  const [currentData, setCurrentData] = useState();
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
  const yillik = yearlyData();
  const aylikVeri = monthlyData();
  const haftalikVeri = weeklyData();

  const getCleanAylik = (input: any) => {
    return new Promise((resolve, reject) => {
      const cleanAylik = input?.filter(
        (item) => item.week == "monthlyCategories"
      );
      console.log(cleanAylik);
      if (cleanAylik) {
        resolve(cleanAylik[0].categories);
      } else {
        reject("Could not get cleanAylik data");
      }
    });
  };

  let montlyDataReady: any[] = [];
  useEffect(() => {
    getCleanAylik(aylikVeri).then((data: any) => {
      console.log("DATA IS AA", data);

      if (!data) return;
      for (let holder in data) {
        montlyDataReady.push({
          study: holder,
          duration: data[holder],
        });
      }
      setCurrentData(montlyDataReady);
      console.log(montlyDataReady);
    });
  }, []);

  // const aha = [
  //   { study: "Reading", duration: 15 },
  //   { study: "Study", duration: 20 },
  // ];
  return (
    <>
      {currentData && (
        <DonutChart
          data={currentData}
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
