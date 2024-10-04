import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../navlinks';
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from 'react-icons/gi'; 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './NavBar.module.scss';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu 
  const closeMenuAfterDelay = () => {
    setTimeout(() => {
      setIsMenuOpen(false);  
    }, 100);  
  };

   //  Close the menu after a delay
   const handleLinkClick = () => {
    closeMenuAfterDelay(); 
  };

  // Clean up the timeout when the component unmounts
  useEffect(() => {
    return () => {
      // Clear timeout 
      clearTimeout();
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={s.navBarStyle}>
     <NavLink to="/" className={s.titleStyle}>
     <h1>INGN</h1>
     </NavLink>
     <div className={`${s.navLinks} ${isMenuOpen ? s.showMenu : s.hideMenu}`}>
     
      {navLinks.map((item, index) => (
        <React.Fragment key={index}>
           {index >-1 && <span className={s.lineStyle}>|</span>}
        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '#000000' })} 
        to={item.link} key={index} className={s.navLinkStyle} onClick={handleLinkClick}>
        {item.title}
        </NavLink>
        </React.Fragment>
      ))}
      </div>
      <div className={s.iconStyle}>
      <Link to="/Login"><BsFillPersonFill /> </Link>
                <GiHamburgerMenu onClick={handleMenuToggle} className={s.hamburgerIcon}   /> 
      </div>
        
     
    </nav>
  );
};
