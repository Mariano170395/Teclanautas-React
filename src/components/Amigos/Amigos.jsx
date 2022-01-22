import React from "react";
import './Amigos.css'

let Amigos = () => {

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
              />
            </div>
            <div className="col-sm-1">
              <button className="btn btn-primary" id="btnBuscar">
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="containerFlex">
              <div className="card">
                <img
                  src="../Amigos/Img/avatar-1577909_960_720.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">@usuario</p>
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

export {Amigos};
