const router = require("express").Router();
const symptomController = require("../../controllers/symptomController");

router.route("/")
    .post(symptomController.create)
    .get(symptomController.load);

module.exports = router;