import { useState } from "react";
import { useEffect } from "react";
import "./styles/Criptomonedas.css";
import red from"./img/red.png"
import green from "./img/green.png"
// import axios from "axios"; Revisar Axios
import { Link } from "react-router-dom";

function Criptomonedas() {
  const API_URL = import.meta.env.VITE_API_URL;
  
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    fetch(`${API_URL}${import.meta.env.VITE_API_ALL}`)
      .then((response) => response.json())
       .then((data) => setCryptos(data.data))
        .catch( e => console.error("404 Data no found"));
  },[]);

  
  return (
    <>
      <main >
      <h1 className="title">Lista de crypto </h1>
      <div className="wrapper">



        {cryptos ? (
            cryptos.map(({ id, name, priceUsd, changePercent24Hr }) => {


                return (

                
                <Link  to= {`/criptomonedas/${id}`}  key={id} className="card">
                
                        <h2>{name}</h2>
                          <p>Price: <span>{ parseFloat(priceUsd).toFixed(4) }</span></p>
                          <p>Código: <span>{id}</span></p>
                          <p>Cambio en 24h:
                          <span
                          className={parseFloat(changePercent24Hr).toFixed(4) > 0 ? "Subió" : "Bajo"}> 
                          {parseFloat(changePercent24Hr).toFixed(4)} %
                          </span>
                          <img  className="icon"src={parseFloat(changePercent24Hr).toFixed(4) > 0 ? green : red} alt="" />
                        </p>
                          <p> Ver detalle </p>
              </Link>
                  
            );
        })
        ) : (
            <h1>Loading</h1>
            )}
        
        </div>
      </main>
    </>
  );
}

export default Criptomonedas;