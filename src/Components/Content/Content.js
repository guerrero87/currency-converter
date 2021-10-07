import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initApi,
  swapOriginDestiny,
  updateDestinyCurrency,
  updateOriginCurrency,
  userInput,
} from "../../Reducers/exchangeReducer";

export default function Content() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ApiReducer);

  const rates = state.conversionRates;
  const originCurrency = state.originCurrency;
  const destinyCurrency = state.destinyCurrency;

  useEffect(() => {
    dispatch(initApi());
  }, [dispatch]);

  function currencyConvert(userInput) {
    return (userInput * rates[destinyCurrency]) / rates[originCurrency];
  }

  return (
    <div className="content">
      {state.loading ? (
        <p>{"REQUESTING LATEST CONVERSION RATES"}</p>
      ) : (
        <div className="wrapper">
          <p>Amount to convert:</p>
          <input
            id="currency"
            type="number"
            onChange={() =>
              dispatch(userInput(document.getElementById("currency").value))
            }
          />
          <span>From</span>
          <select
            name="originCurrency"
            id="originCurrency"
            value={originCurrency}
            onChange={() =>
              dispatch(
                updateOriginCurrency(
                  document.getElementById("originCurrency").value
                )
              )
            }
          >
            {Object.keys(rates).map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
          <button onClick={() => dispatch(swapOriginDestiny())}>SWAP</button>
          <span>To</span>
          <select
            name="destinyCurrency"
            id="destinyCurrency"
            value={destinyCurrency}
            onChange={() =>
              dispatch(
                updateDestinyCurrency(
                  document.getElementById("destinyCurrency").value
                )
              )
            }
          >
            {Object.keys(rates).map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
          <p>
            {state.userInput == null ? "" : currencyConvert(state.userInput)}
          </p>
        </div>
      )}
    </div>
  );
}
