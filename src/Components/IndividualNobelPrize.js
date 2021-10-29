import React from "react";

function IndividualNobelPrize({ data }) {
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
        <div className="dropdown">
          <p>Show Laurates</p>
          <i class="fas fa-caret-down"></i>
        </div>
      )}
    </div>
  );
}

export default IndividualNobelPrize;
