import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/Navbar/NavBar";
import Alle from "../../pages/Alle";
import { Footer } from "../../components/Footer/Footer";
import CookieBanner from "../../components/CookieBanner/CookieBanner";




export const MainLayout = () => {



    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
        <CookieBanner/>
      </>
    );
  };