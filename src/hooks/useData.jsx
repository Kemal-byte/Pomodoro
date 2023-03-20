import { useEffect, useState } from "react";
import { dataReader } from "../../firebase/database";
import { months, WeekNames, days } from "../../firebase/databaseUtil";
import { weekNumber } from "../../firebase/database";
const useData = () => {
  const [allData, setAllData] = useState();
  const [cleanData, setCleanData] = useState({
    montly: null,
    yearly: null,
    weekly: null,
    montlyPie: null,
    yearlyPie: null,
    weeklyPie: null,
  });
  useEffect(() => {
    dataReader()
      .then((data) => {
        setAllData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!allData) return;

    Promise.all([
      monthlyData().then((data) =>
        data?.filter((item) => item.week !== "monthlyCategories")
      ),
      yearlyData(),
      weeklyData().then((data) =>
        data?.filter(
          (item) =>
            item.dayName !== "weeklyCategories" &&
            item.dayName !== "weeklyTotal"
        )
      ),
      monthlyData()
        .then((data) => getCleanAylik(data))
        .then((data) => {
          console.log("%%%%%%%%%%%%%%%%%%%%", data);
          if (!data) return;
          const updatedMonthlyData = [];
          for (let holder in data) {
            updatedMonthlyData.push({
              study: holder,
              duration: data[holder],
            });
          }
          console.log("&&&&&&&&&&&&&&&&&&&&&", updatedMonthlyData);
          return updatedMonthlyData;
        }),
    ])
      .then(([cleanAylik, yil, hafta, weeklyPie]) => {
        setCleanData({
          monthly: cleanAylik,
          yearly: yil,
          weekly: hafta,
          weeklyPie: weeklyPie,
        });
      })
      .catch((err) => console.log(err));
  }, [allData]);

  function getCleanAylik(input) {
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
  }

  /**
   * It returns the monthly focus time.
   * @returns {Array}
   */
  const yearlyData = () => {
    return new Promise((resolve, reject) => {
      let yearsArray = [];
      if (!allData) return reject(new Error("No data available"));

      for (let key in allData) {
        yearsArray.push({
          month: key,
          monthlyTotal: allData[key].monthlyTotal,
          monthlyCategories: allData[key]?.monthlyCategories,
        });
      }
      yearsArray.sort((a, b) => {
        return months.indexOf(a.month) - months.indexOf(b.month);
      });
      resolve(yearsArray);
    });
  };

  /**
   * A promise that returns the focus time for each week.
   * @returns {Array}
   * @example [{week: "Week 1", duration: 120, categories: {study: 120, work: 0, etc...}}, {week: "Week 2", duration: 60, categories: {study: 60, work: 0, etc...}}]
   */

  const monthlyData = () => {
    return new Promise((resolve, reject) => {
      let monthsArray = [];
      const currentMonth = new Date().getMonth();
      if (!allData) {
        reject(new Error("No data available"));
      }
      for (let key in allData[months[currentMonth]]) {
        if (key !== "monthlyTotal") {
          monthsArray.push({
            week: key,
            duration: allData[months[currentMonth]][key].weeklyTotal,
            categories: allData[months[currentMonth]].monthlyCategories,
          });
        }
      }
      monthsArray.sort((a, b) => {
        return WeekNames.indexOf(a.week) - WeekNames.indexOf(b.week);
      });
      resolve(monthsArray);
    });
  };

  /**
   * It returns the daily focus time for each day of the week.
   * @returns {Array}
   * @example [{dayName: "Monday", duration: 120}, {dayName: "Tuesday", duration: 60}]
   */
  const weeklyData = () => {
    return new Promise((resolve, reject) => {
      let weeklyArray = [];
      const currentMonth = new Date().getMonth();
      if (!allData) return reject(new Error("No data available"));

      for (let key in allData[months[currentMonth]][WeekNames[weekNumber]]) {
        // console.log(allData[months[currentMonth]][WeekNames[weekNumber]][key]);
        weeklyArray.push({
          dayName: key,
          duration:
            allData[months[currentMonth]][WeekNames[weekNumber]][key]
              .dailyTotal,
          all: allData[months[currentMonth]][WeekNames[weekNumber]][key],
        });
      }
      weeklyArray.sort((a, b) => {
        return days.indexOf(a.dayName) - days.indexOf(b.dayName);
      });
      resolve(weeklyArray);
    });
  };

  return { cleanData };
};

export default useData;
