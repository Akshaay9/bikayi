import React, { useState } from "react";

function HomePage() {
  const [showNobelPrice, setShowNobelPrice] = useState("all");
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
    </div>
  );
}

export default HomePage;
