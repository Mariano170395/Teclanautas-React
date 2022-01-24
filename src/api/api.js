
//Login
  const apiLogin = async(userData) => {
   return await fetch('http://localhost:3001/login',{
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
   }) 
   .then(res=> res.json())
   .catch(error => console.log(error))
  };

//Crear Mensaje Ayuda
const helpApi = async(helpMsg) => {
  let response = await fetch('http://localhost:3001/help',{
    method:"POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(helpMsg)
  })

  let resjson = await response.json()
  return resjson
 };


//Post Curso
  const postCurso = async(userData) => {
   return await fetch('http://localhost:3001/login',{
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
   }) 
   .then(res=> res.json())
   .catch(error => console.log(error))
  };

export {apiLogin, postCurso, helpApi}
