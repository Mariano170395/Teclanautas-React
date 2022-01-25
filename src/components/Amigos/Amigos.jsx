import {React, useState} from "react";
import "./Amigos.css";
import avatar from './Img/avatar.png'
import {listarUsuario} from '../../api/api'

let Amigos = () => {

  const [user, setUser] = useState([]);

  const getUsers = async()=>{
    let res = await listarUsuario()
    let resjson =  res.json();
   console.log('hola');
  }

  getUsers()


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
              />
            </div>
            <div className="col-sm-1">
              <button className="btn btn-primary" id="btnBuscar" >
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
                  <img src={avatar} alt='Usuario' className="avatarUsuario"/>
                  <h5 className="card-title">Nombre</h5>
                  <p className="card-text" id='TextoCard'>
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
