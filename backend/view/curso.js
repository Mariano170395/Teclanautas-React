const cursoController = require('../controller/curso')

module.exports = (app) => {
app.post('/cursos', async(req,res)=>{
    let result = await cursoController.createCurso(req.body)
    console.log(req.body);
    res.send( result );
  })
}