 const searchUserController = require('../controller/buscar-user')

module.exports = (app) => {
app.post('/search', async(req,res)=>{
try {
    let result = await searchUserController.buscarUsuario(req.body)
    console.log(req.body);
    res.send( result );
} catch (error) {
    console.log(error);
}
  })
}
