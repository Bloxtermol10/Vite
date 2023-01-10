import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"

const App = () =>{

  return(
      
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route/>
        <Route/>
      </Routes>
    </BrowserRouter>
     
  )

}

export default App