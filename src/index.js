import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage} from './pages/LoginPage'
import {HomePage} from './pages/HomePage'
import {PerfilPage} from './pages/PerfilPage'
import {CrearUsuarioPage} from './pages/crearUsuarioPage'
import {UsuariosPage} from './pages/UsuariosPage'
import {CursosPages} from './pages/CursosPages'
import {NotFoundPage} from './pages/NotFoundPage'



ReactDOM.render(
  <>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/perfil' element={<PerfilPage/>}/>
        <Route path='/crear-usuario' element={<CrearUsuarioPage/>}/>
        <Route path='/usuarios' element={<UsuariosPage/>}/>
        <Route path='/cursos' element={<CursosPages/>}/>
        <Route path='*' element={<NotFoundPage/>}/> 
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
