import { useEffect, useState } from "react";
import { dataReader } from "../../firebase/database";
const useData = () => {
  const [allData, setAllData] = useState();
  useEffect(() => {
    dataReader()
      .then((data) => {
        console.log({ ...data });
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
    console.log("yearl data called");
    let yearsArray = [];
    if (!allData) return;
    for (let key in allData) {
      yearsArray.push({
        [key]: {
          monthlyTotal: allData[key].monthlyTotal,
          monthlyCategories: allData[key]?.monthlyCategories,
        },
      });
    }
    return yearsArray;
  };

  /**
   * It returns the focus time for each week.
   * ! Currently it returns an empty array 🥲
   * @returns {Array}
   */
  const monthlyData = () => {
    let monthsArray = [];
    if (!allData) return;
    for (let key in allData.Apr) {
      if (key !== "monthlyTotal" && key !== "monthlyCategories") {
        // console.log(key, allData.Apr[key].weeklyTotal);
        monthsArray.push({ [key]: allData.Apr[key].weeklyTotal });
      }
    }
    // console.log(monthsArray);
    return monthsArray;
  };

  return { yearlyData, monthlyData };
};

export default useData;
