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

  let yillik;

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
    monthlyData()
      .then((data) => setAylikVeri(data))
      .catch((err) => console.log(err));
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

  return (
    <>
      {timeFrame == "weekly" && (
        <DonutChart
          data={montlyDataReady}
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
