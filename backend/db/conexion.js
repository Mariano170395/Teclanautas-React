const Sequelize = require('sequelize')


//parametros
//nombre de la db, usuario, password
const sequelize = new Sequelize('redsocial','root',null,{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;
