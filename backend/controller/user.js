const userModel = require('../model/user')

module.exports.loginUser = async(userData)=>{
    let result = await userModel.login(userData)
    return result
}