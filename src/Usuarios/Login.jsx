import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {

  const navigation = useNavigate()
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const[cargando, setCargando] = useState()
  const[error, setError] = useState()
  
  const submit = (e) => {
    setError(null)
    e.preventDefault()
    setCargando(true)
    axios.post("https://reqres.in/api/login", user)
    .then((data) =>{
        localStorage.setItem("tokenEDmarket", data.data.token)
        navigation("/")
        setCargando(false)
       })
      .catch((e) => {
        setCargando(false)
        setError(e)
        console.error(e)
      })
  };


  if(localStorage.getItem("tokenEDmarket")) return <Navigate to="/"/>
  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form className="login" onSubmit={submit} action="">
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="field">
          <label  htmlFor="password">
            Contraseña
          </label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <span className="errorForm">{error && error.response.data.error}</span>
        <div className="submit">
          {cargando ? <input type="submit" value="Cargando..." />    :
          [<input  type="submit" value="Registrarse" />,
          <input type="submit" value="Ingresar" />]}
        </div>
      </form>
    </div>
  );
};

export default Login;
