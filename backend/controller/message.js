const messageModel = require("../model/message");

module.exports.createMessage = async (msgHelp) => {
  let response = await messageModel.create(msgHelp);
  return response;
};