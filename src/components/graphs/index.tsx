import BarChart from "./column";
import Pie from "./piechart";
import { dataReader } from "../../../firebase/database";
import { useEffect, useState } from "react";
export default () => {
  const [readData, setReadData] = useState();
  useEffect(() => {
    dataReader()
      .then((data) => {
        console.log(data);
        setReadData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <BarChart info={readData} />
      <Pie info={readData} />
    </div>
  );
};
