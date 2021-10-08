import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initApi } from "../../Reducers/ApiReducer";
import "./Content.css";

import { Loading } from "../Loading/Loading";
import Error from "../Error/Error";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";

export default function Content() {
  const dispatch = useDispatch();
  const apiState = useSelector((state) => state.ApiReducer);

  useEffect(() => {
    dispatch(initApi());
  }, [dispatch]);

  return (
    <div className="content">
      <div className="content-card">
        {apiState.loading ? (
          <Loading />
        ) : apiState.error ? (
          <Error errorCode={apiState.statusCode} />
        ) : (
          <CurrencyConverter />
        )}
      </div>
    </div>
  );
}
