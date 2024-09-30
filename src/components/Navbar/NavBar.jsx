import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../navlinks';
import s from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={s.navBarStyle}>
      {navLinks.map((item, index) => (
        <NavLink to={item.link} key={index} className={s.navLinkStyle}>
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};
