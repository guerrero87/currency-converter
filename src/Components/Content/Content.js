import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initApi,
  updateActiveCurrency,
  userInput,
} from "../../Reducers/exchangeReducer";

export default function Content() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ApiReducer);

  const rates = state.conversion_rates;
  const activeCurrency = state.activeCurrency;

  useEffect(() => {
    dispatch(initApi());
  }, [dispatch]);

  return (
    <div className="content">
      {state.loading ? (
        <p>{"LOADING"}</p>
      ) : (
        <div className="wrapper">
          <p>Enter amount to convert in USD:</p>
          <input
            id="currency"
            type="number"
            onChange={() =>
              dispatch(userInput(document.getElementById("currency").value))
            }
          />
          <p>Select conversion currency:</p>
          <select
            name="rates"
            id="ratesA"
            defaultValue="USD"
            onChange={() =>
              dispatch(
                updateActiveCurrency(document.getElementById("ratesA").value)
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
            {state.userInput == null
              ? ""
              : state.userInput * rates[activeCurrency]}
          </p>
        </div>
      )}
    </div>
  );
}
