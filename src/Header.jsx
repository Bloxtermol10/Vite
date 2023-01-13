import { useContext } from "react";
import { NavLink, useNavigate,Link  } from "react-router-dom";
import { UserContext } from "./Context/Usercontext";
import logo from "./img/Price down.svg";
import "./styles/Header.css";
const Header = () => {

  const navigation = useNavigate()

   const usuario = useContext(UserContext)
  return (
    <>
    <header className="wrapper-header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <ul className="content-header">
          <li >
            <NavLink className="item-header" to="/"> Inicio</NavLink>
          </li>
          <li >
            <NavLink className="item-header" to="/criptomonedas"> Criptomonedas </NavLink>
          </li>
          <li >
            <NavLink className="item-header" to="/app/login"> login</NavLink>
          </li>
          <li >
            <NavLink className="item-header" to="/user"> Perfil {usuario.nombre}</NavLink>
          </li>
          <li >
            <a onClick={()=>{
              localStorage.removeItem("tokenEDmarket")
              navigation("/app/login")
            }} className="item-header" > Cerrar sesion</a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
