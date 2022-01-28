import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './Img/logo.png'
import './NavbarLog.css'

const NavbarLog = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid"  >
      <NavLink className='nav-link' to='/'>
            <a className="navbar-brand">
              <img className="Logo" src={logo} alt="Logo" />
            </a>
          </NavLink>
        </div>
    </nav>
    </>
  )
};

export {NavbarLog}