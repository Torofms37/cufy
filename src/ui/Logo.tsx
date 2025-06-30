import { Link } from "react-router-dom";
import "../styles/logo.css";

export const Logo = () => {
  return (
    <Link to="/" className="logo-link ">
      <i className="iconoir-transition-left-solid back-icon"></i>
    </Link>
  );
};
