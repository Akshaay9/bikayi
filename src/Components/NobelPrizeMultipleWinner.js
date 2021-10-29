import React from "react";
import { useNobelContext } from "../Context/NobelPriceContext";
import NobelPriceWinnerlaureates from "./NobelPriceWinnerlaureates";

function NobelPrizeMultipleWinner() {
  const {
    state: { multipleNobelPrice },
  } = useNobelContext();
  return (
    <div>
      <div className="card individual-cards">
        <NobelPriceWinnerlaureates data={multipleNobelPrice} />
      </div>
    </div>
  );
}

export default NobelPrizeMultipleWinner;
