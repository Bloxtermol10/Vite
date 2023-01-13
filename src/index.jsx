import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";

const Index = () => {

  if(!localStorage.getItem("tokenEDmarket")) return <Navigate to={"/app/login"}/>
  return (
    <>
      <Header />
      
      <Outlet />
    </>
  );
};
export default Index;
