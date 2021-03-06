import React from "react";
import "./Navbar.css";
import logo from "./Img/logo.png";
import { NavLink } from "react-router-dom";
import { readNotification } from "../../redux/actions/notification";
import { connect } from "react-redux";

//redux
const mapStateToProps = (state) => {
  return {
    notification: state.notificationReducer.notification,
  };
};

const Navbar = ({ readNotification, notification }) => {
  // const [user, saveUser] = useLocalStorage("USER_DATA", {});
  // const [token, saveToken] = useLocalStorage("TOKEN", {});

  let cerrarSesion = () => {
    localStorage.clear();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="nav-link" to="/home">
            <img className="Logo" src={logo} alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/perfil">
                  <h5>Perfil</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/usuarios">
                  <h5>Usuarios</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cursos">
                  <h5>Cursos</h5>
                </NavLink>
              </li>
              <li className="nav-item" onClick={readNotification}>
                <NavLink className="nav-link" to="/notificaciones">
                  <h5> Noti{notification && "*"}</h5>
                </NavLink>
              </li>
              
            </ul>
            <span className="nav-item" id="exit">
                <NavLink className="nav-link" to="/" onClick={cerrarSesion}>
                  <h5>Cerrar Sesion</h5>
                </NavLink>
              </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default connect(mapStateToProps, { readNotification })(Navbar);
