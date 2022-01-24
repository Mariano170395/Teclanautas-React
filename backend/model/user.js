const sql = require("../db/conexion");

module.exports.login = async (userData) => {
  let response = await sql.query(
    `SELECT email, name, last_name, brd_date, date_stamp FROM users WHERE email LIKE '${userData.email}' AND pass = MD5('${userData.pass}')`
  );
  let response0 = response[0][0];
  let loginResult = response0 ? true : false;

  let loginResponse = {
    login: loginResult,
    data: response0 ? response0 : false,
  };
  return loginResponse;
};
