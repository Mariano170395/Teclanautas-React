import {React, useEffect} from 'react';
import { Login } from '../components/Login/Login';
import { NavbarLog } from '../components/NavbarLog/NavbarLog';

const LoginPage = () => {

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return(
      <>
      <NavbarLog/>
      <Login/>
      </>
  )
};

export {LoginPage};
