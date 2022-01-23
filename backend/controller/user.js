const userModel = require('../model/user')

module.exports.loginUser = async(userData)=>{
await userModel.login(userData)
}