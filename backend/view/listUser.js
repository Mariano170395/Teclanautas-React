const listUserController = require('../controller/listUser')

module.exports = (app)=>{
app.get('/user', async()=>{
    let result = await listUserController.list()
    return result
})
}