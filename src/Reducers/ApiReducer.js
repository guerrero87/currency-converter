import { getApiData } from "../Service/ApiService";

const initialState = {
  loading: true,
};

export const ApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@data/request_successful":
      return {
        ...state,
        loading: false,
        error: false,
        conversionRates: action.payload,
      };
    case "@data/request_unsuccessful":
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
        statusCode: action.payload.status,
      };
    default:
      return state;
  }
};

//ACTIONS
export const initApi = () => {
  return async (dispatch) => {
    const apiResponse = await getApiData();

    if (apiResponse.status !== 200) {
      dispatch({
        type: "@data/request_unsuccessful",
        payload: apiResponse,
      });
    } else {
      dispatch({
        type: "@data/request_successful",
        payload: apiResponse.data.conversion_rates,
      });
    }
  };
};
