import { React, useState } from "react";
import "./Amigos.css";
import avatar from "./Img/avatar.png";
import { buscarUserApi } from "../../api/api";

let Amigos = () => {
  const [search, setSearch] = useState({name:''});

  const handleInput = (e) => {
    setSearch({name: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await buscarUserApi(search);
    return response
  };

  //Falta hacer fetch de amigos

  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="ordenar">
            <div className="col-sm-12">
              <input
                type="text"
                placeholder="Buscar"
                className="form-control"
                onChange={handleInput}
              />
            </div>
            <div className="col-sm-1">
              <button
                className="btn btn-primary"
                id="btnBuscar"
                type="submit"
                onClick={handleSubmit}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="containerFlex">
              <div className="card text-center w-1">
                <div className="card-body">
                  <img src={avatar} alt="Usuario" className="avatarUsuario" />
                  <h5 className="card-title">Nombre</h5>
                  <p className="card-text" id="TextoCard">
                    Agregalo ahora a tu red de Teclanautas
                  </p>
                  <a href="#" className="btn btn-primary">
                    Agregar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Amigos };
