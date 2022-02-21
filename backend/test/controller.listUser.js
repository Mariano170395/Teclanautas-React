const listUserController = require("../controller/listUser");
const expect = require("chai").expect;

//Reviso si mis usuarios son listados en un array
describe("Testing listUserController", () => {
  describe("Check add function", () => {
    it("Check return type", async() => {
        result = await listUserController.list()
        expect(result).to.be.a('array')
    });
  });
});
