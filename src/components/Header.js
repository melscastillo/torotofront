import { Link } from "react-router-dom";
import logo from "../images/toroto.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Toroto" />
      </Link>
    </header>
  );
};
export default Header;
