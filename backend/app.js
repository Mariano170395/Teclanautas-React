const express = require('express');
const cors = require('cors')
const app = express();
const sequelize = require('./db/conexion')

//Vistas
const user = require('./view/user')
const message =  require('./view/message')
const curso = require('./view/curso')
const crearUsuario =  require('./view/crear-usuario')
const userList = require('./view/listUser')
const buscarUser = require('./view/buscar-user')


require("dotenv").config()

//Middleware
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

user(app)
message(app)
curso(app)
crearUsuario(app)
userList(app)
buscarUser(app)

