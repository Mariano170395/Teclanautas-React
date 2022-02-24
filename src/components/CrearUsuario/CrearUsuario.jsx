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
      last_name: payload.last_name,
      brd_date: payload.brd_date,
      hobby: payload.hobby,
      puesto: payload.puesto,
      habilidad: payload.habilidad,
      img: payload.img
    };

    setUser(usuarioCreado);
    let response = await crearUsuarioApi(usuarioCreado);
    Navigate("/");
    return response;
  };
  
  //Hola Ale
  //Hola Tony

  //Prueba
  

    return (
      <>
        <div className="container">
          <br />
          <br />
          <div className="card" id="cardForm">
            <h1>Ingresa tus Datos:</h1>
            <form onSubmit={handleSubmit(createUser)}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  {...register("email", {
                    required: true,
                    maxLength: 100,
                    pattern:
                      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/,
                  })}
                  className="form-control"
                />
                {errors?.email?.type === "required" && (
                  <p className="error">Este campo es requerido</p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p className="error">Ingresa un email valido</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  {...register("pass", {
                    required: true,
                    maxLength: 50,
                  })}
                  className="form-control"
                  type="password"
                />
                {errors?.pass?.type === "maxLength" && (
                  <p className="error">
                    La Contraseña debe tener un maximo de 50 caracteres
                  </p>
                )}
                {errors?.pass?.type === "required" && (
                  <p className="error">Este campo es requerido</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
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
              </div>
              <div className="mb-3">
                <label className="form-label">Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("last_name", {
                    required: true,
                    maxLength: 100,
                    pattern: /^[a-zA-Z]/,
                  })}
                />
                {errors?.last_name?.type === "required" && (
                  <p className="error">Este campo es requerido</p>
                )}
                {errors?.last_name?.type === "pattern" && (
                  <p className="error">Solamente son permitidas letras</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha de Nacimiento</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("brd_date", {
                    required: true,
                  })}
                />
                {errors?.date?.type === "required" && (
                  <p className="error">Este campo es requerido</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Hobby</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("hobby", {
                    required: true,
                  })}
                />
                {errors?.hobby?.type === "required" && (
                  <p className="error">Este campo es requerido</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Puesto</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("puesto", {
                    required: true,
                  })}
                />
                {errors?.puesto?.type === "required" && (
                  <p className="error">Este campo es requerido</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Habilidad</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("habilidad", {
                    required: false,
                  })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Ingresa el link de tu Imagen</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("img", {
                    required: false,
                  })}
                />
              </div>
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