import { getApiData } from "../Service/ApiService";

let initialApiState = {
  loading: true,
  activeCurrency: "USD",
};

export const ApiReducer = (state = initialApiState, action) => {
  switch (action.type) {
    case "@data/request":
      console.log("@data/request");
      return {
        ...state,
        loading: false,
        conversion_rates: action.payload,
      };
    case "@data/update_currency":
      console.log("@data/update_currency");
      return { ...state, activeCurrency: action.payload };
    case "@data/user_input":
      console.log("@data/user_input");
      return { ...state, userInput: action.payload };
    default:
      return state;
  }
};

//ACTIONS
export const initApi = () => {
  return async (dispatch) => {
    const apiResponse = await getApiData();

    dispatch({
      type: "@data/request",
      payload: apiResponse.conversion_rates,
    });
  };
};
export const updateActiveCurrency = (activeCurrency, convertedAmount) => {
  return (dispatch) => {
    dispatch({
      type: "@data/update_currency",
      payload: activeCurrency,
    });
  };
};

export const userInput = (userInput) => {
  return {
    type: "@data/user_input",
    payload: userInput,
  };
};
