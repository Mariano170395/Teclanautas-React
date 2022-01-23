const sql = require('../db/conexion');

module.exports.login = async(userData)=>{
    let response = await sql.query(`SELECT * FROM users WHERE email LIKE '${userData.email}' AND pass = MD5('${userData.pass}')`)
    console.log(response);
}
