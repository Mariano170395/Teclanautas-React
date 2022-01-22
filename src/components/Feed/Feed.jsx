import React from "react";
import "./Feed.css";

const Feed = () => {
  return (
    <>
      <br />
      <div className="container" id="containerNuevo">
        <div className="card">
          <h5 className="card-header">Crear Post</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Que quieres contarnos?"
                  className="inputPost"
                  id="inputPost"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12" id="flexBtn">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="btnSubmit"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Feed };
