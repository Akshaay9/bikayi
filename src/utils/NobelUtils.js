import axios from "axios";

export const FetchData = async (url) => {
  try {
    const data = await axios.get(url);
    return data.data.prizes;
  } catch (error) {
    console.log(error);
  }
};

export const getYears = () => {
  let result = [];
  for (let i = 1900; i <= 2018; i++) {
    result.push(i);
  }
  return result;
};

export const getCategories = (data) => {
  let result = data.map((ele) => ele.category);
  return result.filter((ele, i) => result.indexOf(ele) === i);
};

export const filterData = (filterCategory1, filterCategory2, data) => {
  let result = JSON.parse(JSON.stringify(data));
  console.log(filterCategory1);
  if (filterCategory1 === "default" && filterCategory2 === "default") {
    return result;
  }
  if (filterCategory1 !== "default") {
    result = result.filter((ele) => {
      return (
        ele.year.toString().toLowerCase() ===
        filterCategory1.toString().toLowerCase()
      );
    });
  }
  if (filterCategory2 !== "default") {
    result = result.filter((ele) => {
      return (
        ele.category.toString().toLowerCase() ===
        filterCategory2.toString().toLowerCase()
      );
    });
  }

  return result;
};