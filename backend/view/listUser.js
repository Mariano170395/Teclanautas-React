const listUserController = require('../controller/listUser')

module.exports = (app)=>{
app.get('/user', async(req,res)=>{
    let result = await listUserController.list()
    return result
})
}