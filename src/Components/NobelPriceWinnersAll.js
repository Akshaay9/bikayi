import React from "react";
import { useNobelContext } from "../Context/NobelPriceContext";
import IndividualNobelPrize from "./IndividualNobelPrize";
import "./app.css";
function NobelPriceWinnersAll() {
  const {
    state: { loading, nobelData, filterByCategoryNames },
    nobelDispatch,
  } = useNobelContext();
  return (
    <div>
      <div className="grid-container">
        {nobelData.map((ele) => (
          <IndividualNobelPrize data={ele} />
        ))}
      </div>
      filterByCategoryNames
    </div>
  );
}

export default NobelPriceWinnersAll;
