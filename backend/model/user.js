const sql = require("../db/conexion");

module.exports.login = async (userData) => {
  let response = await sql.query(
    `SELECT * FROM users WHERE email LIKE '${userData.email}' AND pass = MD5('${userData.pass}')`
  );
  
  let response0 = response[0][0]
  let userDataResult = response0 ? response0 : {response: 'Usuario no valido'}
  console.log(userDataResult);
};


