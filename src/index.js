import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Feed } from "./components/Feed/Feed";
import { Perfil } from "./components/Perfil/Perfil";
import { Login } from "./components/Login/Login";
import { Cursos } from "./components/Cursos/Cursos";
import {Amigos} from './components/Amigos/Amigos'
import { CrearUsuario } from "./components/CrearUsuario/CrearUsuario";
import { NotFound } from "./components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/Listar/List";
import { Ayuda } from "./components/Ayuda/Ayuda";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/list' element={<List/>}/>
        <Route path="/feed" element={<Feed />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/login" element={<Login />} />
        <Route path='/crear-usuario' element={<CrearUsuario/>}/>
        <Route path='/amigos' element={<Amigos/>}/>
        <Route path ='/ayuda' element={<Ayuda/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
