import axios from "axios";

export const FetchData = async (url) => {
  try {
    const data = await axios.get(url);
    return data.data.prizes;
  } catch (error) {
    console.log(error);
  }
};

const getYears = () => {
  let result = [];
  for (let i = 1900; i <= 2018; i++) {
    result.push(i);
  }
  return result;
};
