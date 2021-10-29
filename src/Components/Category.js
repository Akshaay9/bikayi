import React from "react";
import { getCategories, getYears } from "../utils/NobelUtils";

function Category({ data, setFilterByYear, setFilterByCategory }) {
  return (
    <div className="filter">
      <div>
        <label htmlFor="">Filter By Category</label>
        <select
          name=""
          id=""
          onChange={(e) => setFilterByCategory((ele) => e.target.value)}
        >
          <option value="default">Default</option>
          {data.length > 0 &&
            getCategories(data)?.map((ele) => (
              <option value={ele}>{ele}</option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor="">Filter By Year</label>
        <select
          name=""
          id=""
          onChange={(e) => setFilterByYear((ele) => e.target.value)}
        >
          <option value="default">Default</option>
          {getYears().map((ele) => (
            <option value={ele}>{ele}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Category;
