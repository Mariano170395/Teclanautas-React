import React from "react";
import { NavLink } from "react-router-dom";
import btn from './Img/pngegg.png'
import './BotonAyuda.css'

const BotonAyuda = () => {
  return (
    <div className="div-btn-msj">
      <NavLink className='nav-link' to='/ayuda'>
        <img src={btn} className="msg-btn" />
      </NavLink>
    </div>
  );
};

export { BotonAyuda };
