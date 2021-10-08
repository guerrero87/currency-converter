import { useDispatch, useSelector } from "react-redux";
import { swapOriginDestiny } from "../../Reducers/ExchangeReducer";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
import UserInput from "../UserInput/UserInput";
import swapIcon from "../../Icons/icon_swap.png";
import "./CurrencyConverter.css";
import { formatAsCurrency } from "../../Utils/Utils";

export default function CurrencyConverter() {
  const dispatch = useDispatch();
  const apiState = useSelector((state) => state.ApiReducer);
  const exchangeState = useSelector((state) => state.ExchangeReducer);

  const rates = apiState.conversionRates;
  const originCurrency = exchangeState.originCurrency;
  const destinyCurrency = exchangeState.destinyCurrency;

  function convertCurrency(userInput) {
    return (userInput * rates[destinyCurrency]) / rates[originCurrency];
  }

  return (
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
      <output className="result">
        {exchangeState.userInput == null || exchangeState.userInput === ""
          ? "Please enter a number to convert"
          : isNaN(exchangeState.userInput)
          ? "Input only numbers"
          : formatAsCurrency(Number(exchangeState.userInput), originCurrency) +
            " is " +
            formatAsCurrency(
              convertCurrency(exchangeState.userInput),
              destinyCurrency
            )}
      </output>
    </div>
  );
}
