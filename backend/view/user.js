const userController = require("../controller/user");

module.exports = (app) => {
  // login
  app.post("/login", async (req, res) => {
    let result = await userController.loginUser(req.body);
    res.send({ result });
    console.log("el req es", req.body);
  });
};
