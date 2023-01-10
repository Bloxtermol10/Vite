import { NavLink } from "react-router-dom";
import logo from "./img/Price down.svg";
import "./styles/Header.css";
const Header = () => {
  return (
    <header className="wrapper-header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <ul className="content-header">
          <li className="item-header">
            <NavLink to="/"> Inicio</NavLink>
          </li>
          <li className="item-header">
            <NavLink to="contacto"> Contacto</NavLink>
          </li>
          <li className="item-header">
            <NavLink to="nosotros"> Nosotros</NavLink>
          </li>
          <li className="item-header">
            <NavLink to="login"> Log In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
