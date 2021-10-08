import { useDispatch, useSelector } from "react-redux";
import {
  updateDestinyCurrency,
  updateOriginCurrency,
} from "../../Reducers/ExchangeReducer";
import "./CurrencyDropdown.css";

export default function CurrencyDropdown(props) {
  const dispatch = useDispatch();
  const apiState = useSelector((state) => state.ApiReducer);
  const exchangeState = useSelector((state) => state.ExchangeReducer);

  return (
    <div className="currency-dropdown">
      <span>{props.title}</span>
      <select
        name={props.type}
        id={props.type}
        value={
          props.type === "originCurrency"
            ? exchangeState.originCurrency
            : exchangeState.destinyCurrency
        }
        onChange={() =>
          dispatch(
            props.type === "originCurrency"
              ? updateOriginCurrency(document.getElementById(props.type).value)
              : updateDestinyCurrency(document.getElementById(props.type).value)
          )
        }
      >
        {Object.keys(apiState.conversionRates).map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
}
