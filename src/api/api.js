//Login
const apiLogin = async (userData) => {
  return await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

//Crear Mensaje Ayuda
const helpApi = async (helpMsg) => {
  let response = await fetch("http://localhost:3001/help", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(helpMsg),
  });

  let resjson = await response.json();
  return resjson;
};

//Crear Curso
const crearCurso = async (curso) => {
  let response = await fetch("http://localhost:3001/cursos", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(curso),
  });

  let resjson = await response.json();
  return resjson;
};

//Listar Usuario
const listarUsuario = async()=>{
  return await fetch('http://localhost:3001/user',{
    method:'GET',
    headers: {
      "content-Type": "application/json",
    }
  })

}

//Crear usuario
const crearUsuarioApi = async (createUser) => {
  let response = await fetch("http://localhost:3001/createuser", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(createUser),
  });
  return response;
};

export { apiLogin, crearCurso, helpApi, crearUsuarioApi, listarUsuario };
