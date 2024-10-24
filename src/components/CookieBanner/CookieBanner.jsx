import React, { useEffect, useState } from "react";
import style from "./CookieBanner.module.scss";
import ReactGA from "react-ga4";

export const CookieBanner = () => {
  const [withTracking, setWithTracking] = useState(false);
  const [hasUserCookie, setHasUserCookie] = useState(false);

  // Initialize Google Analytics with GTag ID
  if (withTracking === true) {
    ReactGA.initialize('G-NM20KV40KL')
  }

  function enableGA() {
    setWithTracking(true);
    setHasUserCookie(true);
    localStorage.setItem("userAccept", true);
  }

  function disableGA() {
    setWithTracking(false);
    setHasUserCookie(true);
    localStorage.setItem("userAccept", false);
  }

  // Check i localstorage om brugeren allerede har accepteret eller afslået Cookies
  const hasUserAccepted = localStorage.getItem("userAccept");
  console.log("User Accepted", hasUserAccepted);

  return (
    hasUserCookie === false &&
    hasUserAccepted === null && (
      <div className={style.cookie_banner}>
        <section>
          <p>This site uses cookies for tracking purposes.</p>
        </section>
        <section>
          <button onClick={disableGA}>DENY</button>
          <button onClick={enableGA}>ACCEPT</button>
        </section>
      </div>
    )
  );
};

