import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then((data) => setCryptos(data.data))
      .catch(console.error("404 Data no foud"));
  }, []);

  

  return (
    <>
      <h1>Lista de crypto </h1>

      <ol>
        {cryptos ?
          cryptos.map(({id, name, priceUsd}) => {
            return (
            <li key={id}>
             Name: {name}   Price: {priceUsd}</li>
            )
          }):

          <h1>Loading</h1>
        }
      </ol>
    </>
  );
}

export default App;
