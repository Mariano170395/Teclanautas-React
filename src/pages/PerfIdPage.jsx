import React from 'react';
import  Navbar  from '../components/Navbar/Navbar';
import PerfId from '../components/PerfId/PerfId'
import { BotonAyuda } from '../components/BotonAyuda/BotonAyuda';

const PerfIdPage = () => {
  return (
      <>
      <Navbar/>
      <PerfId/>
      <BotonAyuda/>
      </>
  )
};

export {PerfIdPage};
