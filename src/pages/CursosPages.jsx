import React from 'react';
import  Navbar  from '../components/Navbar/Navbar';
import {Cursos} from '../components/Cursos/Cursos'
import { BotonAyuda } from '../components/BotonAyuda/BotonAyuda';

const CursosPages = () => {
  return (
      <>
      <Navbar/>
      <Cursos/>
      <BotonAyuda/>
      </>
  )
};

export {CursosPages};
