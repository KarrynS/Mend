const router = require("express").Router();
const userRoutes = require("./user");
const symptomRoutes = require("./symptom");

// Profile routes
router.use("/user", userRoutes);

// User routes
//router.use("/user", symptomRoutes);


module.exports = router;
