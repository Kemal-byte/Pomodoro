import { useEffect, useState } from "react";
import { dataReader } from "../../firebase/database";
import { months, WeekNames, days } from "../../firebase/databaseUtil";
import { weekNumber } from "../../firebase/database";
const useData = () => {
  const [allData, setAllData] = useState();
  useEffect(() => {
    dataReader()
      .then((data) => {
        setAllData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  /**
   * It returns the monthly focus time.
   * @returns {Array}
   */
  const yearlyData = () => {
    // console.log("yearl data called");
    let yearsArray = [];
    if (!allData) return;
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
    return yearsArray;
  };

  /**
   * It returns the focus time for each week.
   * @returns {Array}
   */

  const monthlyData = () => {
    // console.trace("Show me");
    return new Promise((resolve, reject) => {
      let monthsArray = [];
      const currentMonth = new Date().getMonth();
      // console.log(months[currentMonth]);
      if (!allData) {
        reject(new Error("No data available"));
      }
      for (let key in allData[months[currentMonth]]) {
        if (key !== "monthlyTotal") {
          // console.log(key, allData.Apr[key].weeklyTotal);
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

  const weeklyData = () => {
    let weeklyArray = [];
    const currentMonth = new Date().getMonth();
    if (!allData) return;
    for (let key in allData[months[currentMonth]][WeekNames[weekNumber]]) {
      // console.log(allData[months[currentMonth]][WeekNames[weekNumber]][key]);
      weeklyArray.push({
        dayName: key,
        duration:
          allData[months[currentMonth]][WeekNames[weekNumber]][key].dailyTotal,
        all: allData[months[currentMonth]][WeekNames[weekNumber]][key],
      });
    }
    weeklyArray.sort((a, b) => {
      return days.indexOf(a.dayName) - days.indexOf(b.dayName);
    });
    return weeklyArray;
  };

  // const pieMonthlyData = () => {
  //   const data = monthlyData();
  //   let montlyDataReady = [];
  //   let holder = data?.filter((item) => item.week == "monthlyCategories");
  //   console.log(data);
  //   let categories = holder[0].categories;

  //   for (let holder in categories) {
  //     montlyDataReady.push({
  //       study: holder,
  //       duration: categories[holder],
  //     });
  //   }
  //   return montlyDataReady;
  // };
  return { yearlyData, monthlyData, weeklyData, allData };
};

export default useData;
