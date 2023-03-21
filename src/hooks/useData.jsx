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
    const initialData = async () => {
      try {
        const data = await dataReader();
        setAllData(data);
      } catch (error) {
        console.error(error);
      }
    };
    initialData();
  }, []);

  useEffect(() => {
    if (!allData) return;

    Promise.all([
      monthlyDataWithouCategories(),
      yearlyData(),
      weeklyDataInfo(),
      weeklyPieData(),
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

  async function monthlyDataWithouCategories() {
    const data = await monthlyData();
    return data?.filter((item) => item.week !== "monthlyCategories");
  }
  async function weeklyPieData() {
    const updatedMonthlyData = [];
    try {
      const data = await monthlyData();
      const cleanData = await getCleanAylik(data);
      for (let holder in cleanData) {
        updatedMonthlyData.push({
          study: holder,
          duration: cleanData[holder],
        });
      }
    } catch (error) {
      console.log(error.message);
    }
    return updatedMonthlyData;
  }
  async function weeklyDataInfo() {
    let holder;
    try {
      const data = await weeklyData();
      holder = data?.filter(
        (item) =>
          item.dayName !== "weeklyCategories" && item.dayName !== "weeklyTotal"
      );
    } catch (error) {
      console.log(error.message);
    }
    return holder;
  }

  /**
   * Sorting function that returns the ordered version of the retrived data
   * @param {Any<Array>} data Input Array that will be sorted
   * @param {String} arg Type of the array
   * @returns {Array}
   * @example [{week: "Week 1", duration: 120, categories: {study: 120, work: 0, etc...}}, {week: "Week 2", duration: 60, categories: {study: 60, work: 0, etc...}}]
   */
  function sorting(data, arg) {
    let holder;
    if (arg == "monthly") {
      holder = data.sort(
        (a, b) => WeekNames.indexOf(a.week) - WeekNames.indexOf(b.week)
      );
    } else if (arg == "yearly") {
      holder = data.sort(
        (a, b) => months.indexOf(a.month) - months.indexOf(b.month)
      );
    } else {
      holder = data.sort(
        (a, b) => days.indexOf(a.dayName) - days.indexOf(b.dayName)
      );
    }
    return holder;
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
      if (!allData) {
        reject(new Error("No data available"));
      }
      let monthsArray = [];
      const baseNode = () => allData[months[currentMonth]];
      const baseHolder = baseNode();

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
      if (!allData) return reject(new Error("No data available"));
      let weeklyArray = [];
      const base = () => allData[months[currentMonth]][WeekNames[weekNumber]];
      const baseHolder = base();

      for (let key in baseHolder) {
        weeklyArray.push({
          dayName: key,
          duration: baseHolder[key].dailyTotal,
          all: baseHolder[key],
        });
      }
      const sorted = sorting(weeklyArray, "weekly");
      resolve(sorted);
    });
  };

  return { cleanData };
};

export default useData;
