import React, { useEffect, useState } from "react";
import { DonutChart } from "@tremor/react";

const PieComponent = ({
  info,
  timeFrame,
  yearlyData,
  monthlyData,
  weeklyData,
  allData,
}) => {
  const [montlyDataReady, setMontlyDataReady] = useState([]);
  let [aylikVeri, setAylikVeri] = useState();
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
  let yillik;
  // let aylikVeri;

  let haftalikVeri;
  const getCleanAylik = (input: any) => {
    return new Promise((resolve, reject) => {
      const cleanAylik = input?.filter(
        (item) => item.week == "monthlyCategories"
      );

      console.log("cleanAylik Data is ", cleanAylik);
      if (cleanAylik) {
        resolve(cleanAylik[0].categories);
      } else {
        reject("Could not get cleanAylik data");
      }
    });
  };
  useEffect(() => {
    if (!allData) return;
    yillik = yearlyData();
    // let holder = monthlyData();
    monthlyData()
      .then((data) => setAylikVeri(data))
      .catch((err) => console.log(err));
    // console.log("Holder data is ", holder);
    // setAylikVeri(holder);
    haftalikVeri = weeklyData();
  }, [allData]);

  useEffect(() => {
    console.log("Aylik veri inside 2. useEffect", aylikVeri);
    if (!aylikVeri) return;
    console.log("Aylik veri before calling getClean", aylikVeri);
    getCleanAylik(aylikVeri).then((data: any) => {
      console.log("DATA IS AA", data);

      if (!data) return;
      const updatedMonthlyData = [];
      for (let holder in data) {
        updatedMonthlyData.push({
          study: holder,
          duration: data[holder],
        });
      }
      setMontlyDataReady(updatedMonthlyData);
    });
  }, [aylikVeri]);

  const aha = [
    { study: "Reading", duration: 15 },
    { study: "Study", duration: 20 },
  ];
  return (
    <>
      {timeFrame == "weekly" && (
        <DonutChart
          data={montlyDataReady || aha}
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
