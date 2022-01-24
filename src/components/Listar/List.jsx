import React from 'react';
import { listUser } from '../../api/api';

const List = () => {
  return(
      <>
      <h1>Esto es Listar</h1>
      <button type='submit' onSubmit={listUser}>On Click</button>
      </>
  )
};

export default List;
