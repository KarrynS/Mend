const router = require("express").Router();
const userRoutes = require("./user");
const symptomRoutes = require("./symptom");
const optometristRoutes = require ("./optometrist");

// Profile routes
router.use("/user", userRoutes);

// User routes
router.use("/symptom", symptomRoutes);

// Optom Routes
router.use("/optom", optometristRoutes);

module.exports = router;
