import { useContext } from "react"
import { UserContext } from "../Context/Usercontext"


const User = ()=>{
    const usuario = useContext(UserContext);
    console.log(usuario)
    return(
        <div>
        <h1> Hola {usuario.nombre}</h1>
        <h1> Naciste el {usuario.fecha}</h1>
        </div>
    )
}
export default User