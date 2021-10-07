import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initApi } from "../../Reducers/ApiReducer";
import {
  swapOriginDestiny,
  updateDestinyCurrency,
  updateOriginCurrency,
  userInput,
} from "../../Reducers/ExchangeReducer";

export default function Content() {
  const dispatch = useDispatch();
  const apiState = useSelector((state) => state.ApiReducer);
  const exchangeState = useSelector((state) => state.ExchangeReducer);

  const rates = apiState.conversionRates;
  const originCurrency = exchangeState.originCurrency;
  const destinyCurrency = exchangeState.destinyCurrency;

  useEffect(() => {
    dispatch(initApi());
  }, [dispatch]);

  function currencyConvert(userInput) {
    return (userInput * rates[destinyCurrency]) / rates[originCurrency];
  }

  return (
    <div className="content">
      {apiState.loading ? (
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
            {exchangeState.userInput == null
              ? ""
              : currencyConvert(exchangeState.userInput)}
          </p>
        </div>
      )}
    </div>
  );
}
