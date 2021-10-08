import { useDispatch } from "react-redux";
import { userInput } from "../../Reducers/ExchangeReducer";
import "./UserInput.css";

export default function UserInput() {
  const dispatch = useDispatch();

  return (
    <div className="user-input">
      <span>Amount to convert</span>
      <input
        id="userInput"
        type="text"
        maxLength="9"
        onChange={() =>
          dispatch(userInput(document.getElementById("userInput").value))
        }
      />
    </div>
  );
}
