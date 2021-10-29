import React, { useState } from "react";
import NobelPriceWinnerlaureates from "./NobelPriceWinnerlaureates";

function IndividualNobelPrize({ data }) {
  const [showLaurates, setShowLaurates] = useState(false);
  return (
    <div className="card">
      <p>{data.year}</p>
      <p>
        <span>category</span> : {data.category}
      </p>
      <p>
        <span>laureates</span> : {data?.laureates?.length || 0}
      </p>
      {data?.laureates?.length > 0 && (
        <div
          className="dropdown"
          onClick={() => setShowLaurates((ele) => !ele)}
        >
          <p>Show Laurates</p>
          {!showLaurates ? (
            <i class="fas fa-caret-down"></i>
          ) : (
            <i class="fas fa-sort-up"></i>
          )}
        </div>
      )}
      {data?.laureates?.length > 0 && showLaurates && (
        <NobelPriceWinnerlaureates data={data?.laureates} />
      )}
    </div>
  );
}

export default IndividualNobelPrize;
