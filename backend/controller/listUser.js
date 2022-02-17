const listUserModel = require("../model/listUser");

module.exports.list = async () => {
  let response = await listUserModel.list();
  console.log(response);
 return response;
};