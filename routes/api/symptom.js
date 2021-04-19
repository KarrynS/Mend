const router = require("express").Router();
const symptomController = require("../../controllers/symptomController");

router.route("/symptom")
    .post(symptomController.create)

module.exports = router;