import "./Error.css";

export default function Error(props) {
  return (
    <div className="error">
      <span className="error-message">{props.message}</span>
      <span className="error-action">
        Please check your internet connection and reload the page.
      </span>
    </div>
  );
}
