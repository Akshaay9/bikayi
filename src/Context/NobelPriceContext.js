import { createContext, useContext, useReducer } from "react";
import { getMultipleNobelPriceData } from "../utils/NobelUtils";

const nobelContext = createContext();

const initialState = {
  loading: true,
  nobelData: [],
  multipleNobelPrice: [],
};

const nobelReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_NOBEL_DATA":
      return {
        ...state,
        nobelData: payload,
        multipleNobelPrice: getMultipleNobelPriceData(payload),
        loading: false,
      };
    case "FILTER_BY_YEAR":
      return {
        ...state,
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
      };
    case "GET_MULTIPLE_NOBEL_PRICE_DATA":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const NobelContext = ({ children }) => {
  const [state, dispatch] = useReducer(nobelReducer, initialState);

  return (
    <nobelContext.Provider value={{ state, nobelDispatch: dispatch }}>
      {children}
    </nobelContext.Provider>
  );
};

export const useNobelContext = () => useContext(nobelContext);
