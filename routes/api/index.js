const router = require("express").Router();
const userRoutes = require("./user");
const symptomRoutes = require("./symptom");

// Profile routes
router.use("/user", userRoutes);

// User routes
router.use("/symptom", symptomRoutes);


module.exports = router;
