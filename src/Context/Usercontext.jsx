import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({children}) =>{

    const [usuario, setUsuario] = useState({})
    
    useEffect(()=>{
        setUsuario({
            nombre : "Diego",
            fecha : "19/12/2004"
        })    
    },[])
    
    return(
        <UserContext.Provider value={usuario}>
           {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}