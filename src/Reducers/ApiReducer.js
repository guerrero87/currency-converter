import { getApiData } from "../Service/ApiService";

const initialState = {
  loading: true,
};

export const ApiReducer = (state = initialState, action) => {
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
