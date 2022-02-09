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
         <div className="card mb-3" id="perfil">
          <div className="row g-0">
            <div className="col-md-4" id="img">
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
    </>
  );
};

export { Perfil };
