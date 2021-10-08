import axios from "axios";

export function getApiData() {
  const url =
    "https://v6.exchangerate-api.com/v6/" +
    process.env.REACT_APP_EXCHANGE_RATE_API_KEY +
    "/latest/USD";

  return axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
