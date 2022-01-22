import { React, useState } from "react";
import "./CrearUsuario.css";
import { saveUser } from "../../api/api";

const CrearUsuario = () => {
  const [user, setUser] = useState({
    nombres_usuario:"",
    correo_usuario:"",
    contrasena_usuario:"",
    pais:"",
    hobby_usuario: "",
    puesto_usuario:"",
    imagen_usuario: "",
  });

  let createUser = async(event) => {
    event.preventDefault();
    const usuarioCreado = {
      nombres_usuario: event.target[0].value,
      correo_usuario: event.target[1].value,
      contrasena_usuario: event.target[2].value,
      pais: event.target[3].value,
      hobby_usuario: event.target[4].value,
      puesto_usuario: event.target[5].value,
      imagen_usuario: event.target[6].value,
    };

    setUser(usuarioCreado);
    saveUser(usuarioCreado)
  };


  
  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="card w-100">
          <form onSubmit={createUser}>
            <div className="mb-3">
              <label className="form-label">Escribe tus Nombres</label>
              <input type="text" className="form-control" id="nombreDatos" />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                id="correo_usuario"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="contrasena_usuario"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Pais</label>
              <input type="text" className="form-control" id="pais" />
            </div>
            <div className="mb-3">
              <label className="form-label">Hobby</label>
              <input type="text" className="form-control" id="hobby_usuario" />
            </div>
            <div className="mb-3">
              <label className="form-label">Puesto</label>
              <input type="text" className="form-control" id="puesto_usuario" />
            </div>
            <div className="mb-3">
              <label className="form-label">Ingresa el link de tu Imagen</label>
              <input type="text" className="form-control" id="imagen_usuario" />
            </div>

            <div className="d-grid gap-2 col-12 mx-auto">
              <button className="btn btn-primary" type="submit">
                Registro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { CrearUsuario };
