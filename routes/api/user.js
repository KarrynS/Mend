const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/signup")
    .post(userController.create)
    .get(userController.find);    

module.exports = router;