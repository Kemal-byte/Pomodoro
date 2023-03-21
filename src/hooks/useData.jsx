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
          if (!data) return;
          const updatedMonthlyData = [];
          for (let holder in data) {
            updatedMonthlyData.push({
              study: holder,
              duration: data[holder],
            });
          }
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

  /**
   * Sorting function that returns the ordered version of the retrived data
   * @param {Array} data Input Array that will be sorted
   * @param {String} arg Type of the array
   * @returns {Object}
   * @example [{week: "Week 1", duration: 120, categories: {study: 120, work: 0, etc...}}, {week: "Week 2", duration: 60, categories: {study: 60, work: 0, etc...}}]
   */
  function sorting(data, arg) {
    if (arg == "monthly") {
      data.sort((a, b) => {
        return WeekNames.indexOf(a.week) - WeekNames.indexOf(b.week);
      });
    } else {
      data.sort((a, b) => {
        return months.indexOf(a.month) - months.indexOf(b.month);
      });
    }
  }

  /**
   * @param {Array} input - Unfiltered monthly data
   * @returns {Promise<Array>}
   */
  function getCleanAylik(input) {
    return new Promise((resolve, reject) => {
      const cleanAylik = input?.filter(
        (item) => item.week == "monthlyCategories"
      );
      if (cleanAylik) {
        resolve(cleanAylik[0].categories);
      } else {
        reject("Could not get cleanAylik data");
      }
    });
  }
  const currentMonth = new Date().getMonth();

  /**
   * A promise that returns the each months focus time.
   * @returns {Promise<Array>}
   * @example [{month: "January", monthlyTotal: 120, monthlyCategories: {study: 120, work: 0, etc...}}, {month: "February", monthlyTotal: 60, monthlyCategories: {study: 60, work: 0, etc...}}]
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
      const sorted = sorting(yearsArray, "yearly");
      resolve(sorted);
    });
  };

  /**
   * A promise that returns the focus time for each week.
   * @returns {Promise}
   * @example [{week: "Week 1", duration: 120, categories: {study: 120, work: 0, etc...}}, {week: "Week 2", duration: 60, categories: {study: 60, work: 0, etc...}}]
   */

  const monthlyData = () => {
    return new Promise((resolve, reject) => {
      let monthsArray = [];
      const baseNode = () => allData[months[currentMonth]];
      const baseHolder = baseNode();
      if (!allData) {
        reject(new Error("No data available"));
      }
      for (let key in baseHolder) {
        if (key !== "monthlyTotal") {
          monthsArray.push({
            week: key,
            duration: baseHolder[key].weeklyTotal,
            categories: baseHolder.monthlyCategories,
          });
        }
      }
      const sorted = sorting(monthsArray, "monthly");
      resolve(sorted);
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
      const base = () => allData[months[currentMonth]][WeekNames[weekNumber]];
      const baseHolder = base();
      if (!allData) return reject(new Error("No data available"));

      for (let key in baseHolder) {
        weeklyArray.push({
          dayName: key,
          duration: baseHolder[key].dailyTotal,
          all: baseHolder[key],
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
