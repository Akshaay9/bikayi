import axios from "axios";
import NobelPriceData from "./TestData/NobelPrice.json";


jest.mock("axios");

describe("fetchusers", () => {
  test("should return nobel prize list", async () => {
    axios.get.mockResolvedValueOnce(NobelPriceData);
    const results = await axios.get(`https://considerablesimplecomputer.akshaynair5.repl.co/`);
    expect(axios.get).toHaveBeenCalledWith(
      `https://considerablesimplecomputer.akshaynair5.repl.co/`
    );
    expect(results).toEqual(NobelPriceData);
  });
});


