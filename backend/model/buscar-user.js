const sql = require("../db/conexion");

module.exports.buscarUsuario = async (datosUser) => {
  try {
    let res = await sql.query(
      `SELECT email, name, last_name, brd_date, hobby, puesto, habilidad, img  FROM users WHERE name LIKE '%${datosUser.name}%'`
    );
    let res0 =  await res[0]
    return res0
  } catch (error) {
    console.log(error);
  }
};
