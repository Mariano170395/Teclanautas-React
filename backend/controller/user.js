const userModel = require("../model/user");
const jwt = require("jsonwebtoken");

module.exports.loginUser = async (userData) => {
  let response = await userModel.login(userData);
  if (response.login) {
    //El vector de iniciacion debe ser secreto
    //Va en variables de entorno
    return { token: await jwt.sign(response.data, process.env.SECRET_KEY) };
  }
  return { error: "usuario no encontrado" };
};

module.exports.whoiam = async (userData) => {
  try {
      let result = await userModel.whoiam(userData);
      if (result.success) {
        return result;
      }
      return { error: "usuario no encotrado" };
    } catch (error) {
    return { error: error };
  }
};