import React, { useState, useEffect } from "react";
import { FetchData } from "../utils/NobelUtils";
import { useNobelContext } from "../Context/NobelPriceContext";
import NobelPriceWinnersAll from "../Components/NobelPriceWinnersAll";
import NobelPrizeMultipleWinner from "../Components/NobelPrizeMultipleWinner";

function HomePage() {
  const [showNobelPrice, setShowNobelPrice] = useState("all");
  const { nobelDispatch } = useNobelContext();

  useEffect(() => {
    (async () => {
      let nobelData = await FetchData(
        `http://api.nobelprize.org/v1/prize.json`
      );
      nobelDispatch({ type: "GET_NOBEL_DATA", payload: nobelData });
    })();
  }, []);

  return (
    <div>
      <div className="title">
        <p
          className={showNobelPrice === "all" ? "titleBorder" : ""}
          onClick={() => setShowNobelPrice((ele) => "all")}
        >
          Nobel Price Winners
        </p>
        <p
          className={showNobelPrice === "multipleWInner" ? "titleBorder" : ""}
          onClick={() => setShowNobelPrice((ele) => "multipleWInner")}
        >
          Multiple Nobel Price Winners
        </p>
      </div>
      {showNobelPrice === "all" && <NobelPriceWinnersAll />}
      {showNobelPrice === "multipleWInner" && <NobelPrizeMultipleWinner />}
    </div>
  );
}

export default HomePage;
