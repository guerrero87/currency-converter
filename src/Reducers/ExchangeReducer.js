const initialState = {
  originCurrency: "USD",
  destinyCurrency: "EUR",
};

export const ExchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@data/update_origin_currency":
      return { ...state, originCurrency: action.payload };
    case "@data/update_destiny_currency":
      return { ...state, destinyCurrency: action.payload };
    case "@data/user_input":
      return { ...state, userInput: action.payload };
    case "@data/swap_origin_destiny":
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
