const sql = require("../db/conexion");

module.exports.createCurso = async (curso) => {
   let res = await sql.query(
    `INSERT INTO curso ( nombreCurso, lugarCurso, fechaCurso ) VALUES ('${curso.nombre}','${curso.lugar}','${curso.fecha  }')`
  )
  return res
  }
