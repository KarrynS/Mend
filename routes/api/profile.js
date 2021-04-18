const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router.route("/signup")
    .post(profileController.create)

module.exports = router;