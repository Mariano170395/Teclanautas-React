const cursoModel = require("../model/curso");

module.exports.createCurso = async (curso) => {
  let response = await cursoModel.createCurso(curso);
  console.log(response);
  return response;
};
