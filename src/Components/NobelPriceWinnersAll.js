import React, { useState } from "react";
import { useNobelContext } from "../Context/NobelPriceContext";
import IndividualNobelPrize from "./IndividualNobelPrize";
import "./app.css";
import { filterData, getYears } from "../utils/NobelUtils";
import Category from "./Category";
function NobelPriceWinnersAll() {
  const {
    state: { loading, nobelData },
    nobelDispatch,
  } = useNobelContext();

  const [filterByYear, setFilterByYear] = useState("default");
  const [filterByCategory, setFilterByCategory] = useState("default");

  return (
    <div>
      <Category
        data={nobelData}
        setFilterByYear={setFilterByYear}
        setFilterByCategory={setFilterByCategory}
      />
      <div className="grid-container">
        {filterData(filterByYear, filterByCategory, nobelData).map((ele) => (
          <IndividualNobelPrize data={ele} />
        ))}
      </div>
    </div>
  );
}

export default NobelPriceWinnersAll;
