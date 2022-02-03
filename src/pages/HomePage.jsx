import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Feed from '../components/Feed/Feed'
import { BotonAyuda } from '../components/BotonAyuda/BotonAyuda';

const HomePage = () => {
  return(
    <>
    <Navbar/>
    <Feed/>
    <BotonAyuda/>
    </>
  )
};

export {HomePage};
