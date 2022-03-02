// const { Model } = require("sequelize/dist");
const listUserModel = require("../model/listUser");

module.exports.list = async () => {
  let response = await listUserModel.list();
 return response;
};

module.exports.add = (a,b)=>{
  return a + b
}