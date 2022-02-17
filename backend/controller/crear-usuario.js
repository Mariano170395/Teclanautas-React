const crearUsuarioModel = require("../model/crear-usuario");

module.exports.createUsuario = async (createUser) => {
    let response = await crearUsuarioModel.createUsuario(createUser);
    console.log(response);
    return response;
};
