import axios from "axios";
import NobelPriceData from "./TestData/NobelPrice.json";


jest.mock("axios");

describe("fetchusers", () => {
  test("should return nobel prize list", async () => {
    axios.get.mockResolvedValueOnce(NobelPriceData);
    const results = await axios.get(`http://api.nobelprize.org/v1/prize.json`);
    expect(axios.get).toHaveBeenCalledWith(
      `http://api.nobelprize.org/v1/prize.json`
    );
    expect(results).toEqual(NobelPriceData);
  });
});


