import React from 'react';
import  Navbar  from '../components/Navbar/Navbar';
import {Perfil } from '../components/Perfil/Perfil'
import { BotonAyuda } from '../components/BotonAyuda/BotonAyuda';

const PerfilPage = () => {
  return(
      <>
      <Navbar/>
      <Perfil/>
      <BotonAyuda/>
      </>
  )
};

export {PerfilPage};
