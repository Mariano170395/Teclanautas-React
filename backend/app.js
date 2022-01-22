const express = require('express');
const cors = require('cors')
const app = express();
const sequelize = require('./db/conexion')
app.use(express.json())
app.use(cors())


let serverStart = async () => {
    try {
      await sequelize.authenticate();
      console.log("Conectado a Mysql");
  
      app.listen(3001, () => {
        console.log(
          "Bienvenido Teclanauta"
        );
      });
    } catch (error) {
      console.log(`Error en el SQL: ${error}`);
    }
  };
  

serverStart()


app.post('/registro',async (req,res)=>{
    let result = await req.body.user
    console.log(result);
    res.send(result)
})