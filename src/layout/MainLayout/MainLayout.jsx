import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/Navbar/NavBar";
import Alle from "../../pages/Alle";
import { Footer } from "../../components/Footer/Footer";
import CookieBanner from "../../components/CookieBanner/CookieBanner";
import ReactGA from "react-ga4";



export const MainLayout = () => {

  ReactGA.initialize([
    {
      trackingId: 'G-NM20KV40KL',
    },
  ]);
  
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
        <CookieBanner/>
      </>
    );
  };