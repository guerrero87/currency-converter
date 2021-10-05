import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { initApi } from "../../Reducers/exchangeReducer";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ApiReducer);

  useEffect(() => {
    dispatch(initApi());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="content">
        {state.loading ? <p>{"LOADING"}</p> : <p>{JSON.stringify(state)}</p>}
      </div>
    </div>
  );
}
