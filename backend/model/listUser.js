const sql = require("../db/conexion");

module.exports.list = async()=>{
try {
    let res = await sql.query(
        `SELECT * FROM users` 
     )
     let res0 = res[0]
     return(res0);
} catch (error) {
    console.log(error);
}
}