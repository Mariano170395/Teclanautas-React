import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { PerfilPage } from "./pages/PerfilPage";
import { CrearUsuarioPage } from "./pages/crearUsuarioPage";
import { UsuariosPage } from "./pages/UsuariosPage";
import { CursosPages } from "./pages/CursosPages";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PerfIdPage } from "./pages/PerfIdPage";
//Redux
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/perfil/:id" element={<PerfIdPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/crear-usuario" element={<CrearUsuarioPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/cursos" element={<CursosPages />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>,

  document.getElementById("root")
);
