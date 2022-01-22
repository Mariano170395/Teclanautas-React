// const getUser = async(user) => {
//     return await fetch('http://localhost:3001',{
//        method: "POST",
//        headers: {
//          "content-Type": "application/json",
//        },
//        body: JSON.stringify(user),
//     })
//     .then((res)=>{
//         res.json()
//     })
//     .catch(err =>{
//         console.log(err);
//     })
   //  let resjson = await response.json()
   //  console.log( resjson);
   
//    };


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
   
   };

export {saveUser}
