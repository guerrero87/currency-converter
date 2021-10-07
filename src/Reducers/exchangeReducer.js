import { getApiData } from "../Service/ApiService";

const initialApiState = {
  loading: true,
  originCurrency: "USD",
  destinyCurrency: "EUR",
};

export const ApiReducer = (state = initialApiState, action) => {
  switch (action.type) {
    case "@data/request":
      console.log("@data/request");
      return {
        ...state,
        loading: false,
        conversionRates: action.payload,
      };
    case "@data/update_origin_currency":
      console.log("@data/update_origin_currency");
      return { ...state, originCurrency: action.payload };
    case "@data/update_destiny_currency":
      console.log("@data/update_destiny_currency");
      return { ...state, destinyCurrency: action.payload };
    case "@data/user_input":
      console.log("@data/user_input");
      return { ...state, userInput: action.payload };
    case "@data/swap_origin_destiny":
      console.log("@data/swap_origin_destiny");
      return {
        ...state,
        originCurrency: state.destinyCurrency,
        destinyCurrency: state.originCurrency,
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

export const updateOriginCurrency = (originCurrency) => {
  return (dispatch) => {
    dispatch({
      type: "@data/update_origin_currency",
      payload: originCurrency,
    });
  };
};

export const updateDestinyCurrency = (destinyCurrency) => {
  return (dispatch) => {
    dispatch({
      type: "@data/update_destiny_currency",
      payload: destinyCurrency,
    });
  };
};

export const userInput = (userInput) => {
  return {
    type: "@data/user_input",
    payload: userInput,
  };
};

export const swapOriginDestiny = () => {
  return {
    type: "@data/swap_origin_destiny",
  };
};
