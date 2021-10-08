import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initApi } from "../../Reducers/ApiReducer";
import { swapOriginDestiny } from "../../Reducers/ExchangeReducer";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
import UserInput from "../UserInput/UserInput";
import "./Content.css";
import swapIcon from "../../Icons/icon_swap.png";
import { Loading } from "../Loading/Loading";

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

  function result() {
    return (
      Number(exchangeState.userInput).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: originCurrency,
      }) +
      " is " +
      currencyConvert(exchangeState.userInput).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: destinyCurrency,
      })
    );
  }

  return (
    <div className="content">
      <div className="conversion-card">
        {apiState.loading ? (
          <Loading />
        ) : (
          <div className="loaded">
            <UserInput />
            <div className="dropdown-wrapper">
              <CurrencyDropdown title="From" type="originCurrency" />
              <img
                alt="swap currencies"
                className="btn-swap"
                src={swapIcon}
                onClick={() => dispatch(swapOriginDestiny())}
              />
              <CurrencyDropdown title="To" type="destinyCurrency" />
            </div>
            <span className="result">
              {exchangeState.userInput == null || exchangeState.userInput === ""
                ? "Please enter a number to convert"
                : isNaN(exchangeState.userInput)
                ? "Input only numbers"
                : result()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
