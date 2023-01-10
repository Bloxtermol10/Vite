import { useState } from "react";
import { useEffect } from "react";
import "./styles/Home.css";
import red from"./img/red.png"
import green from "./img/green.png"
import axios from "axios";
function Home() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    fetch(`${API_URL}assets`)
      .then((response) => response.json())
       .then((data) => setCryptos(data.data))
        .catch(console.error("404 Data no found"));
  },[]);

  return (
    <>

      <main >
      <h1 className="title">Lista de crypto </h1>
      <div className="wrapper">

        {cryptos ? (
            cryptos.map(({ id, name, priceUsd, changePercent24Hr }) => {
                return (
                    <div key={id} className="card">
                <h2>{name}</h2>
                <p>Price: <span>{ parseFloat(priceUsd).toFixed(4) }</span></p>
                <p>Código: <span>{id}</span></p>
                <p>Cambio en 24h: <span
                 className={parseFloat(changePercent24Hr).toFixed(4) > 0 ? "Subió" : "Bajo"}> 
                {parseFloat(changePercent24Hr).toFixed(4)} %
                </span>
                <img  className="icon"src={parseFloat(changePercent24Hr).toFixed(4) > 0 ? green : red} alt="" />
                </p>
              </div>
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

export default Home;