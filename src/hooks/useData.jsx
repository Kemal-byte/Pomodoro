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
      monthlyPieData(),
      weeklyPieData(),
      yearlyPieData(),
    ])
      .then(([cleanAylik, yil, hafta, montlyPie, weeklyPie, yearlyPie]) => {
        setCleanData({
          monthly: cleanAylik,
          yearly: yil,
          weekly: hafta,
          montlyPie: montlyPie,
          weeklyPie: weeklyPie,
          yearlyPie: yearlyPie,
        });
      })
      .catch((err) => console.log(err));
  }, [allData]);

  async function monthlyDataWithouCategories() {
    const data = await monthlyData();
    return data?.filter((item) => item.week !== "monthlyCategories");
  }
  async function yearlyPieData() {
    return new Promise((resolve, reject) => {
      let holder = [];
      if (!allData) return reject(new Error("No data available"));
      for (let key in allData) {
        if (key == "yearlyCategories") {
          // console.log(allData[key]);
          for (let item in allData[key]) {
            holder.push({
              study: item,
              duration: allData[key][item],
            });
          }
        }
      }
      resolve(holder);
    });
  }
  async function monthlyPieData() {
    const updatedMonthlyData = [];
    try {
      const data = await monthlyData();
      const cleanAylik = data?.filter(
        (item) => item.week == "monthlyCategories"
      );
      let cleanAylikCategories = cleanAylik[0].categories;

      for (let holder in cleanAylikCategories) {
        updatedMonthlyData.push({
          study: holder,
          duration: cleanAylikCategories[holder],
        });
      }
    } catch (error) {
      console.log(error.message);
    }
    return updatedMonthlyData;
  }
  async function weeklyPieData() {
    let holder = [];
    try {
      const data = await weeklyData();
      let filtered = data?.filter((item) => item.dayName == "weeklyCategories");
      let cleanWeeklyCategories = filtered[0].all;
      for (let key in cleanWeeklyCategories) {
        holder.push({
          study: key,
          duration: cleanWeeklyCategories[key],
        });
      }
    } catch (error) {
      console.log(error.message);
    }
    return holder;
  }
  async function weeklyDataInfo() {
    let holder;
    try {
      const data = await weeklyData();
      console.log("%%%%%%%%%%%%%%%%", data);
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
        if (key !== "yearlyCategories" && key !== "yearlyTotal") {
          yearsArray.push({
            month: key,
            monthlyTotal: allData[key].monthlyTotal,
            monthlyCategories: allData[key]?.monthlyCategories,
          });
        }
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
