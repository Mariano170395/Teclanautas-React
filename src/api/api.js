
// const saveUser = async(user) => {
//     return await fetch('http://localhost:3001/registro',{
//        method: "POST",
//        headers: {
//          "content-Type": "application/json",
//        },
//        body: JSON.stringify({user}),
//     })
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch(err =>{
//         console.log(err);
//     })
//    //  let resjson = await response.json()
//    //  console.log( resjson);
   
//    };

   const saveUser = async(user) => {
    let response = await fetch('http://localhost:3001/registro',{
       method: "POST",
       headers: {
         "content-Type": "application/json",
       },
       body: JSON.stringify({user}),
    })

    let resjson = await response.json()
    console.log(resjson);
    return resjson
   
   };

   const listUser = ()=> async()=>{
      let response = await fetch('http://localhost:3001/user')
      let resjson = response.json()
      console.log(resjson);
   }

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

export {saveUser, apiLogin, listUser}
