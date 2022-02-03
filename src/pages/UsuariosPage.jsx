import React from 'react';
import  Navbar  from '../components/Navbar/Navbar';
import Amigos from '../components/Amigos/Amigos'
import { BotonAyuda } from '../components/BotonAyuda/BotonAyuda';

const UsuariosPage = () => {
  return(
      <>
      <Navbar/>
      <Amigos/>
      <BotonAyuda/>
      </>
  )
};

export {UsuariosPage};
