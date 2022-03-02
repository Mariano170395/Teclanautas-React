import { React, useState } from "react";
import "./Amigos.css";
import avatar from "./Img/avatar.png";
import { buscarUserApi } from "../../api/api";
import { Link } from "react-router-dom";

let Amigos = () => {

  const [searchAmigo, setSearchAmigo] = useState("");
   const [getAmigo, setGetAmigo] = useState([]);

  const handleInput = (e) => {
    setSearchAmigo(e.target.value);
  };

   const handleSubmit = async (e) => {
     e.preventDefault();
     
    setGetAmigo([searchAmigo])
  //   setSearch(searchAmigo);

      const buscar = { name: searchAmigo };
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
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Buscar"
                className="form-control"
                onChange={handleInput}
                // value={searchAmigo}
              />
            </div>
            <div className="justify-content-md-end">
              <div className="col-sm-4">
                <button
                  className="d-grid btn btn-primary"
                  id="btnBuscar"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="containerFlex">
               {getAmigo.map((element) => {
                return (
                  <>
                    <div>
                      <div className="card" id="cardTitulo"> 
                        <label className="row title">
                          <h5 className="card-title">{element.name}</h5>
                        </label>
                      </div>
                      <div className="card w-1" key={element.id}>
                        <div className="card-body">
                          
                          {/* <img
                            src={element.img}
                            alt="Usuario"
                            className="avatarUsuario"
                          />
                          <h5 className="card-title">{element.name}</h5> */}
                          <p className="card-text" id="TextoCard">
                            Agregalo ahora a tu red de Teclanautas
                          </p>
                          <Link to={`/perfil/${element.id}`} >
                            <h5>Ir a su perfil</h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                  
                  </>
                );
              })} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//prueba

export default Amigos;
