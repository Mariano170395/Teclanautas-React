const msgController = require('../controller/message')

module.exports = (app) => {
app.post('/help', async(req,res)=>{
    let result = await msgController.createMessage(req.body)
    console.log(req.body);
    res.send( result );
  })
}