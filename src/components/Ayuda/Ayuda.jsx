import { React, useState } from "react";
import { helpApi } from "../../api/api";
import "./Ayuda.css";

const Ayuda = () => {
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [submitHelp, setSubmitHelp] = useState({
    mail: "",
    message: "",
  });

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitHelp = async(e) => {
    e.preventDefault();
     setSubmitHelp({
       mail: mail,
       message: message,
     });


    let response = await helpApi(submitHelp)
    return response
    
  };

  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title">Necesitas Ayuda? Contactanos!</h5>
            <form onSubmit={handleSubmitHelp}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Tu correo electronico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Tu Correo"
                  onChange={handleMail}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Deja tu mensaje aqui
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={handleMessage}
                ></textarea>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { Ayuda };
