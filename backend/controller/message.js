const messageModel = require("../model/message");

module.exports.createMessage = async (userData) => {
  let response = await messageModel.create(userData);
  console.log(response);
  return response;
};
