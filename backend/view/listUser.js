const listUserController = require('../controller/listUser')

module.exports = (app)=>{
app.get('/user', async(req,res)=>{
    let result = await listUserController.list()
    res.json(result)
    return result
    
})

app.get('/user/:id', async(req,res)=>{
    const {id}= req.params
    let result = await listUserController.list()
    let resultFilt = result.find((user) => user.id == id);
    res.json(resultFilt)
    return result
})
}