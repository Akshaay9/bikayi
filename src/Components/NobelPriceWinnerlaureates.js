import React from "react";

function NobelPriceWinnerlaureates({ data }) {
  return (
    <>
      {data?.length > 0 &&
        data.map((ele, i) => (
          <div className="laurates-data">
            <p>
              {" "}
              <span className="count">{i + 1}.</span>
              <span>Name</span> : {`${ele?.firstname} ${ele?.surname}`}{" "}
            </p>
            <p>
              <span>motivation</span> : {ele.motivation}
            </p>
          </div>
        ))}
    </>
  );
}

export default NobelPriceWinnerlaureates;
