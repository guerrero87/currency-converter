import { getYear } from "../../Utils/Utils";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <span>Developed by Joky</span>
      <span>{getYear()}</span>
    </div>
  );
}
