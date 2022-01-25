const sql = require("../db/conexion");

module.exports.createUsuario = async (createUser) => {
  try {
    let res = await sql.query(
      `INSERT INTO users ( email, pass, name, last_name, brd_date, img ) VALUES ('${createUser.email}', MD5('${createUser.pass}'),'${createUser.name}', '${createUser.last_name}', '${createUser.brd_date}', '${createUser.img}')`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
