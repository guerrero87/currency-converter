import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initApi } from "../../Reducers/ApiReducer";
import { swapOriginDestiny, userInput } from "../../Reducers/ExchangeReducer";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";

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
        <p>REQUESTING LATEST CONVERSION RATES</p>
      ) : (
        <div className="wrapper">
          <span>Amount to convert:</span>
          <input
            id="userInput"
            type="text"
            maxLength="9"
            onChange={() =>
              dispatch(userInput(document.getElementById("userInput").value))
            }
          />
          <CurrencyDropdown title="From" type="originCurrency" />
          <button onClick={() => dispatch(swapOriginDestiny())}>SWAP</button>
          <CurrencyDropdown title="To" type="destinyCurrency" />
          <span>
            {exchangeState.userInput == null || exchangeState.userInput === ""
              ? ""
              : isNaN(exchangeState.userInput)
              ? "input must be a number"
              : currencyConvert(exchangeState.userInput).toLocaleString(
                  "en-US",
                  {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: destinyCurrency,
                  }
                )}
          </span>
        </div>
      )}
    </div>
  );
}
