import { React, useState } from "react";
import { crearUsuarioApi } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./CrearUsuario.css";

const CrearUsuario = () => {
  //Destructuring de useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    pass: "",
    name: "",
    last_name: "",
    brd_date: "",
    img: "",
  });

  let createUser = async (payload) => {
    const usuarioCreado = {
      email: payload.email,
      pass: payload.pass,
      name: payload.name,
      //  last_name: payload.last_name
      // brd_date: event.target[4].value,
      // hobby: event.target[5].value,
      // puesto: event.target[6].value,
      // habilidad: event.target[7].value,
      // img: event.target[8].value,
    };

    setUser(usuarioCreado);
    let response = await crearUsuarioApi(usuarioCreado);
    Navigate("/");
    return response;
  };

  console.log(
    watch("email"),
    watch("pass"),
    watch('name')
    );

  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="card" id="cardForm">
          <h1 className="text-center">Ingresa tus Datos:</h1>
          <form onSubmit={handleSubmit(createUser)}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="form-floating mb-3">
              <input
                {...register("email", {
                  required: true,
                  maxLength: 100,
                  pattern:
                    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/,
                })}
                className="form-control"
                placeholder="email"
              />
              {errors?.email?.type === "required" && (
                <p className="error">Este campo es requerido</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="error">Ingresa un email valido</p>
              )}
              <label for="floatingInput">ejemplo@ejem.com</label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <div className="form-floating mb-3">
                <input
                  {...register("pass", {
                    required: true,
                    maxLength: 50,
                  })}
                  className="form-control"
                  placeholder="Password"
                />
                {errors?.pass?.type === "maxLength" && (
                  <p className="error">
                    La Contraseña debe tener un maximo de 50 caracteres
                  </p>
                )}
                {errors?.pass?.type === "required" && (
                  <p className="error">Este campo es requerido</p>
                )}
                <label for="floatingInput">Password</label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombres"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                    pattern: /^[a-zA-Z]/,
                  })}
                />
                {errors?.name?.type === "required" && (
                  <p className="error">Este campo es requerido</p>
                )}
                {errors?.name?.type === "pattern" && (
                  <p className="error">Solamente son permitidas letras</p>
                )}
                <label for="floatingInput">Nombre(s)</label>
              </div>
              
            </div>
            {/* <div className="mb-3">
              <label className="form-label">Apellidos</label>
              <input
                type="text"
                className="form-control"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                  pattern: /^[a-zA-Z]/,
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="error">Este campo es requerido</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="error">Solamente son permitidas letras</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de Nacimiento</label>
              <input type="date" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Hobby</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Puesto</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Habilidad</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Ingresa el link de tu Imagen</label>
              <input type="text" className="form-control" />
            </div> */}

            <div className="d-grid gap-2 col-12 mx-auto">
              <button className="btn btn-primary" type="submit" id="btnLogin">
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
