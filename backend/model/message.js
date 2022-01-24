const sql = require("../db/conexion");

module.exports.create = async (helpMsg) => {
   let res = await sql.query(
    `INSERT INTO help ( mail, message ) VALUES ('${helpMsg.mail}','${helpMsg.message}')`
  )
  console.log(res);
  }
