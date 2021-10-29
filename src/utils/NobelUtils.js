import axios from "axios";

export const FetchData = async (url) => {
  try {
    const data = await axios.get(url);
console.log(data);
    return data.data;
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

export const getMultipleNobelPriceData = (data) => {
  let lookUp = {};
  let finalResult = [];

  data.forEach((ele) => {
    if (ele?.laureates?.length > 0) {
      ele.laureates.forEach((e) => {
        if (e.surname !== undefined) {
          let fullName = e.firstname + e.surname;
          if (lookUp[fullName] === undefined) {
            lookUp[fullName] = fullName;
          } else {
            finalResult.push(e);
          }
        }
      });
    }
  });

  return finalResult;
};
