import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { PerfilPage } from "./pages/PerfilPage";
import { CrearUsuarioPage } from "./pages/CrearUsuarioPage";
import { UsuariosPage } from "./pages/UsuariosPage";
import { CursosPages } from "./pages/CursosPages";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PerfIdPage } from "./pages/PerfIdPage";
import { NotificacionesPage } from "./pages/NotificacionesPage";
import { AyudaPage } from "./pages/AyudaPage";
//Redux
import { Provider } from "react-redux";
import {store} from "../src/redux/store/index";


ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/perfil/:id" element={<PerfIdPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/notificaciones" element={<NotificacionesPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/crear-usuario" element={<CrearUsuarioPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/cursos" element={<CursosPages />} />
          <Route path="/ayuda" element={<AyudaPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>,

  document.getElementById("root")
);
