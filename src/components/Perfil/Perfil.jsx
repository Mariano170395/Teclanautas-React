import React from "react";
import "./Perfil.css";
import Icon from "./Img/Icon.png";
import Avatar from "./Img/avatar.png";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Perfil = () => {
  const [user] = useLocalStorage("USER_DATA", {});

  return (
    <>
      <br />
      <br />
      <div className="container">
        {/* <div classNameName="card">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <img src={Avatar} alt={Avatar} classNameName="fotoPerfil"/>
              </div>
              <div className="col-8">
                <h1 classNameName="nombrePerfil">{user.name} {user.last_name}</h1>
                <h3 classNameName="nombrePerfil">{user.email}</h3>
                <h3 classNameName="nombrePerfil">{user.brd_date}</h3>
                

              </div>
            </div>
            <div className="row">
              <div className="col">1 of 2</div>
            </div>
          </div>
        </div> */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={user.img}
                className="img-fluid rounded-start"
                alt="..."
                id="fotoPerfil"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title" id="nombreUser">
                  {user.name} {user.last_name}
                </h1>
                <br />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><h3><span id='datos'>Correo:</span> {user.email}</h3></li>
                  <li className="list-group-item"><h3><span id='datos'>Fecha de nacimiento:</span> {user.brd_date}</h3></li>
                  <li className="list-group-item"><h3><span id='datos'>Hobby:</span> {user.hobby}</h3></li>
                  <li className="list-group-item"><h3><span id='datos'>Puesto:</span> {user.puesto}</h3></li>
                  <li className="list-group-item"><h3><span id='datos'>Habilidad:</span> {user.habilidad}</h3></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="container-lg">
        <div classNameName="row">
          <div classNameName="col-12">
            <div id="divNombre">
              <h5>{user.name} {user.last_name}</h5>
              <h5>{user.brd_date}</h5>
            </div>
          </div>
          <div classNameName="col-4">
            <div id="divImg"></div>
          </div>
          <div classNameName="col-6">
            <div id="divCorreo">{user.email}</div>
            <div id="divPais"></div>
            <div id="divHobby"></div>
            <div id="divPuesto"></div>
          </div>
          <div classNameName="col-9"></div>
        </div>
      </div> */}
      {/* <div classNameName="div-btn-msj">
        <a href="#">
          <img src={Icon} classNameName="msg-btn" />
        </a>
      </div> */}
    </>
  );
};

export { Perfil };
