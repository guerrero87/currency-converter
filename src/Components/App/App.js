import { getApiData } from "../../Service/ApiService";

function App() {
  return (
    <div className="App">
      <div className="content">
        <button onClick={() => getApiData()}>CLICK ME</button>
      </div>
    </div>
  );
}

export default App;
