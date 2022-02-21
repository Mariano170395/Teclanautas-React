const userController = require("../controller/user");

module.exports = (app) => {
  app.post("/login", async (req, res) => {
    let result = await userController.loginUser(req.body);
    res.send(result);
  });
};

app.post("/whoiam",auth.authenticate,async (req, res) => {
  let result = await userController.whoiam(req.body);
  res.send(result);
});
};