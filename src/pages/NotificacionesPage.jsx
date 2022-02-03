import React from 'react';
import  Navbar  from '../components/Navbar/Navbar';
import { Notificaciones } from '../components/Notificaciones/Notificaciones';
import { BotonAyuda } from '../components/BotonAyuda/BotonAyuda';

const NotificacionesPage = () => {
  return(
      <>
      <Navbar/>
      <Notificaciones/>
      <BotonAyuda/>
      </>
  )
};

export {NotificacionesPage};
