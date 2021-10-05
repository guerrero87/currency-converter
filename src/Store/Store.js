import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { ApiReducer } from "../Reducers/exchangeReducer";

const reducer = combineReducers({
  //REDUCERS
  ApiReducer: ApiReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
