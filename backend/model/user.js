const sql = require("../db/conexion");

module.exports.login = async (userData) => {
  let response = await sql.query(
    `SELECT email, name, last_name, brd_date, hobby, puesto, habilidad, img, date_stamp FROM users WHERE email LIKE '${userData.email}' AND pass = MD5('${userData.pass}')`
  );
  let response0 = response[0][0];
  let loginResult = response0 ? true : false;

  let loginResponse = {
    login: loginResult,
    data: response0 ? response0 : false,
  };
  return loginResponse;
};

module.exports.whoiam = async (userData) => {
  let response = await sql.query(
    `SELECT * FROM users WHERE email LIKE '${userData.email}'`
  );
  let whoiamResult = (await response[0][0]) ? true : false;

  let whoiamResponse = {
    success: whoiamResult,
    data: response[0][0] ? response[0][0] : false,
  };
  return whoiamResponse;
};
