import { React, useState } from "react";
import { crearUsuarioApi } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./CrearUsuario.css";

const CrearUsuario = () => {

  const Navigate = useNavigate();

  const [user, setUser] = useState({
    email:"",
    pass:"",
    name:"",
    last_name:"",
    brd_date: "",
    img:"",
  });

  let createUser = async(event) => {
    event.preventDefault();
    const usuarioCreado = {
      email: event.target[0].value,
      pass: event.target[1].value,
      name: event.target[2].value,
      last_name: event.target[3].value,
      brd_date: event.target[4].value,
      hobby: event.target[5].value,
      puesto: event.target[6].value,
      habilidad: event.target[7].value,
      img: event.target[8].value,
    };

    setUser(usuarioCreado);
    let response = await crearUsuarioApi(usuarioCreado)
    Navigate('/login')
    return response
  };


  
  
  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="card w-100">
          <form onSubmit={createUser}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="correo_usuario"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellidos</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de Nacimiento</label>
              <input type="date" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Hobby</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Puesto</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Habilidad</label>
              <input type="text" className="form-control" />
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
