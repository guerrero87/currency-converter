import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { ApiReducer } from "../Reducers/ApiReducer";
import { ExchangeReducer } from "../Reducers/ExchangeReducer";

const reducer = combineReducers({
  //REDUCERS
  ApiReducer: ApiReducer,
  ExchangeReducer: ExchangeReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
