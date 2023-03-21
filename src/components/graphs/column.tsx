import React, { useEffect, useState } from "react";
import { BarChart } from "@tremor/react";

export default ({ timeFrame, cleanData }) => {
  const [localState, setLocalState] = useState();
  const [collection, setCollection] = useState({
    dataKey: null,
    categories: null,
  });

  useEffect(() => {
    if (timeFrame === "weekly") {
      setLocalState(cleanData.weekly);
      setCollection({ dataKey: "dayName", categories: ["duration"] });
    } else if (timeFrame === "monthly") {
      setLocalState(cleanData.monthly);
      setCollection({ dataKey: "week", categories: ["duration"] });
    } else {
      setLocalState(cleanData.yearly);
      setCollection({ dataKey: "month", categories: ["monthlyTotal"] });
    }
  }, [timeFrame]);

  if (!localState) {
    return <div>Loading...</div>;
  }
  console.log(localState);
  return (
    <BarChart
      data={localState}
      dataKey={collection?.dataKey}
      categories={collection?.categories}
      colors={["blue"]}
      marginTop="mt-6"
      yAxisWidth="w-12"
    />
  );
};
