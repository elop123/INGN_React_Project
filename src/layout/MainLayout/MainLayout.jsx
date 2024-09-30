import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/Navbar/NavBar";



export const MainLayout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
 
      </>
    );
  };