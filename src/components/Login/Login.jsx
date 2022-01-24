import { React, useState } from "react";
import { apiLogin } from "../../api/api";

const Login = () => {
  //Estado Login
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const logUser = async (event) => {
    event.preventDefault();
    let newLogin = {
      email: event.target[0].value,
      pass: event.target[1].value,
    };

    setLoading(true);
    let loginResult = await apiLogin(newLogin);
    if (loginResult) {
      console.log(loginResult);
      setLoading(false);
      if (loginResult.error) {
        setError(true)
      }
      if (loginResult.token) {
        setError(false);
        
      }
    }
  };

  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Hola! Ingresa tus Datos</h5>
            {error && (
              <div className="alert alert-danger" role="alert">
                Has ingresado algun dato mal
              </div>
            )}
            <form onSubmit={logUser}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              {!loading && (
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              )}
            </form>
            {loading && (
              <div className="text-center">
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
