import { getApiData } from "../Service/ApiService";

let initialApiState = {
  loading: true,
  apiResponse: "no response",
};

export const ApiReducer = (state = initialApiState, action) => {
  switch (action.type) {
    case "@data/request":
      console.log("request reached");
      let newState = {
        loading: false,
        apiResponse: "sucess",
        conversion_rates: action.payload.conversion_rates
      };
      return newState;
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
      payload: apiResponse,
    });
  };
};
