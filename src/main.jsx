import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./styles/Main.scss";
import Home from "./Home";
import Login from "./Usuarios/Login";
import Page404 from "./Page-404";
import Index from "./index";
import Criptomonedas from "./Criptomonedas";
import CriptoPage from "./CriptoPage";
import User from "./Usuarios/Usuario";
import { UserContextProvider } from "./Context/Usercontext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="user" element ={<User/>}/>
          
        </Route>

        <Route path="/criptomonedas" element= {<Index/>}>
          <Route index element ={<Criptomonedas/>	}/>
          <Route path=":id" element ={<CriptoPage/>}/>
        </Route>

        <Route path="app">
          <Route path="login" element ={<Login/>}/>

        </Route>

        <Route path="*" element={<Page404 />} />

      </Routes>
    </BrowserRouter>
  </>
  </UserContextProvider>
);
