const buscarUsuarioModel = require("../model/buscar-user");

module.exports.buscarUsuario = async (datosUser) => {
try {
    let response = await buscarUsuarioModel.buscarUsuario(datosUser);
    console.log(response);
    return response;
} catch (error) {
    console.log(error);
}
};
