const createUserController = require('../controller/crear-usuario')

module.exports = (app) => {
app.post('/createuser', async(req,res)=>{
    let result = await createUserController.createUsuario(req.body)
    console.log(req.body);
    res.send( result );
  })

}
