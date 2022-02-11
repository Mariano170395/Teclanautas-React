import { React, useState } from "react";
import { crearCurso } from "../../api/api";
import "./Cursos.css";

const Cursos = () => {
  const [nombreCurso, setNombreCurso] = useState("");
  const [lugarCurso, setLugarCurso] = useState("");
  const [fechaCurso, setFechaCurso] = useState("");
  const [submit, setSubmit] = useState({
    nombre: "",
    lugar: "",
    fecha: "",
  });

  const inputNombreHandle = (e) => {
    setNombreCurso(e.target.value);
  };

  const inputLugarHandle = (e) => {
    setLugarCurso(e.target.value);
  };

  const inputFechaHandle = (e) => {
    setFechaCurso(e.target.value);
  };

  const handleSubmit = async() => {
    setSubmit({
      nombre: nombreCurso,
      lugar: lugarCurso,
      fecha: fechaCurso,
    });
    let response = await crearCurso(submit)
    return response
  };


  return (
    <div className="container">
      <br />
      <br />
      <div className="card text-center" id="cardTitulo">
        <label className="title">Nuevo curso</label>
      </div>
      <div className="card">
        <form>
          <div className="mb-3">
            <div class="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Curso"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={inputNombreHandle}
              />
              <label for="floatingInput">Curso</label>
            </div>
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Lugar donde se Realizo
            </label>
            <div class="form-floating">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Seleciona lugar del curso</option>
                <option value="1">México</option>
                <option value="2">Argentina</option>
                <option value="3">Dimension C-137</option>
              </select>
              <label for="floatingSelect">Lugar</label>
            </div>
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={inputFechaHandle}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            id="btnSubmit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <br />
      <br />
      {submit.nombre && (
        <>
          <div className="card" id="cardTitulo">
            <h1 className="title">Curso:</h1>
          </div>
          <div className="card">
            <label className="form-label">Título: {submit.nombre}</label>
            <label className="form-label">Lugar: {submit.lugar}</label>
            <label className="form-label">Fecha: {submit.fecha}</label>
          </div>
        </>
      )}
    </div>
  );
};

export { Cursos };
