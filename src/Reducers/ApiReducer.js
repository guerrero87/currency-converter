import { getApiData } from "../Service/ApiService";

const initialApiState = {
  loading: true,
  originCurrency: "USD",
  destinyCurrency: "EUR",
};

export const ApiReducer = (state = initialApiState, action) => {
  switch (action.type) {
    case "@data/request":
      return {
        ...state,
        loading: false,
        conversionRates: action.payload,
      };
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
