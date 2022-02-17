import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { apiLogin } from "../../api/api";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Login.css";



// function linearSearch(value, list) {
//   let found = false;
//   let position = -1;
//   let index = 0;

//   while (!found && index < list.length) {
//     if (list[index] == value) {
//       found = true;
//       position = index;
//     } else {
//       index += 1;
//     }
//   }
//   return position;
// }


// function binarySearch(value, list) {
//   let first = 0;
//   let last = list.length - 1;
//   let position = -1;
//   let found = false;
//   let middle;
//   while (found === false && first <= last) {
//     middle = Math.floor((first + last) / 2);
//     if (list[middle] == value) {
//       found = true;
//       position = middle;
//     } else if (list[middle] > value) {
//       //if in lower half
//       last = middle - 1;
//     } else {
//       //in in upper half
//       first = middle + 1;
//     }
//   }
//   return position;
// }


// console.time("arreglo");
// let arregloLoco = arrayGenerator(1000);
// console.timeEnd("arreglo");

// console.time("binaria");
// console.log(binarySearch(888, arregloLoco));
// console.timeEnd("binaria");

// console.time("linear");
// console.log(linearSearch(888, arr


//Hola


const Login = () => {

  //Estado Login
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //Custom Hook
  const [user, saveUser] = useLocalStorage("USER_DATA", {});
  const [token, saveToken] = useLocalStorage("TOKEN", {});

  //useNavigate
  const Navigate = useNavigate();

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
        setError(true);
      }
      if (loginResult.token) {
        setError(false);
        // localStorage.setItem("TOKEN", loginResult.token);
        saveToken({ token: loginResult.token });
        let data = loginResult.token.split(".");
        //Paso de base64 a datos
        let datoUser = window.atob(data[1]);
        saveUser(datoUser);
        console.log(user);
        console.log(token);
        Navigate("/home");
      }
    }
  };

  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="card text-center" id="cardTitulo">
              <label className="title">
              Hola! Ingresa tus Datos
              </label>
        </div>
        <div className="col d-flex justify-content-center" >
          <div className="card w-100">
            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  Has ingresado algun dato mal
                </div>
              )}
              <br />
              <form onSubmit={logUser}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <div class="form-floating mb-3">
                  <input
                    type="email"
                    placeholder="Ejemplo@ejem.com"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                    <label for="floatingInput">Ejemplo@ejem.com</label>
                  </div>
                </div>
                <br />
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <div class="form-floating">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                    <label for="floatingPassword">Password</label>
                  </div>
                  
                </div>
                {!loading && (
                  <div className="d-grid gap-2">
                    <br />
                    <button type="submit" className="btn btn-primary" id='btnLogin'>
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
              <div>
                <NavLink to="/crear-usuario">
                  <br />
                  <h5 className="noTienesCuenta">No tienes cuenta aun?</h5>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
