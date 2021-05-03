const router = require("express").Router();
const managementController = require("../../controllers/managementController");

router.route("/")
    .post(managementController.create)
    .get(managementController.load);

router.route("/:id")
    .delete(managementController.remove);

module.exports = router;