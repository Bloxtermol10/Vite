import { Link } from "react-router-dom"

const Home =()=>{
   
   return(

       <>
        <h1>Bienvenido a EDmarket </h1>
        <p>Conoce las 100 criptos mas usadas</p>
        <Link to="/criptomonedas">
            Ver criptomonedas
        </Link>
    </>
       )
}
export default Home