import React, { useState, useEffect } from "react";
import { FetchData } from "../utils/NobelUtils";
import { useNobelContext } from "../Context/NobelPriceContext";
import NobelPriceWinnersAll from "../Components/NobelPriceWinnersAll";
import NobelPrizeMultipleWinner from "../Components/NobelPrizeMultipleWinner";
import Loader from "../loader/Loader";

function HomePage() {
  const [showNobelPrice, setShowNobelPrice] = useState("all");
  const {
    state: { loading },
    nobelDispatch,
  } = useNobelContext();

  useEffect(() => {
    (async () => {
      let nobelData = await FetchData(
        `https://considerablesimplecomputer.akshaynair5.repl.co/`
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
      {loading && <Loader />}
    </div>
  );
}

export default HomePage;
