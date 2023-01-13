import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CriptoPage =() =>{


const params = useParams() 

const API_URL = import.meta.env.VITE_API_URL;


    const[crypto, setCrypto] = useState([]);
    const [history, setHistory] = useState();

    useEffect(()=>{
        axios.get(`${API_URL}assets/${params.id}`)
        .then(data => setCrypto(data.data.data))
        .catch(e => console.error(e));
   
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then(data => setHistory(data.data.data))
        .catch(e => console.error(e));
    },[]);
    
    return(
        <>
        <h1>{params.id} </h1>
        <div className="info">
            <ul>
                <li > <span className="label">Nombre:</ span> {crypto.name}  </li>
                <li > <span className="label">Símbolo:</ span> {crypto.symbol}  </li>
            </ul>
        </div>
        <h2>Historial</h2>
        <table>
            <thead>
                <tr>
                    <th> Fecha</th>
                    <th> Precio</th>
                </tr>
            </thead>
            <tbody>
                {history &&
                  history.map(({date, priceUsd, time}) =>(
                    <tr key={time}>
                        <td>{date}</td>
                        <td>{priceUsd}</td>
                    </tr>
                  ))

                }
            </tbody>
        </table>
        </>
        
    )
}

export default CriptoPage