import React from "react";
import './Perfil.css'
import Icon from './Img/Icon.png'

const Perfil = () => {
  return (
    <>
    <br />
    <br />
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div id="divNombre"></div>
          </div>
          <div className="col-4">
            <div id="divImg"></div>
          </div>
          <div className="col-6">
            <div id="divCorreo"></div>
            <div id="divPais"></div>
            <div id="divHobby"></div>
            <div id="divPuesto"></div>
          </div>
          <div className="col-9"></div>
        </div>
      </div>
      <div></div>
      <div className="div-btn-msj">
        <a href="#">
          <img src={Icon} className="msg-btn" />
        </a>
      </div>
    </>
  );
};

export { Perfil };
