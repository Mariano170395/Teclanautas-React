import { React, useState } from "react";
import "./Amigos.css";
import avatar from "./Img/avatar.png";
import { buscarUserApi } from "../../api/api";

let Amigos = () => {
  const [search, setSearch] = useState("");
  const [getAmigo, setGetAmigo] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const buscar = { name: search };
    let response = await buscarUserApi(buscar);
    setGetAmigo(response);
  };



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
                value={search}
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
              {getAmigo.map((element) => {
                return(
                  <div className="card text-center w-1" key={element.email}>
                  <div className="card-body">
                    <img src={avatar} alt="Usuario" className="avatarUsuario" />
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text" id="TextoCard">
                      Agregalo ahora a tu red de Teclanautas
                    </p>
                    <a href="#" className="btn btn-primary">
                      Agregar
                    </a>
                  </div>
                </div>
                )
              })}
 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Amigos };
