const router = require("express").Router();
const userRoutes = require("./user");
const symptomRoutes = require("./symptom");
const optometristRoutes = require ("./optometrist");
const managementRoutes = require ("./management")

// Profile routes
router.use("/user", userRoutes);

// User routes
router.use("/symptom", symptomRoutes);

// Optom Routes
router.use("/optom", optometristRoutes);

router.use("/management", managementRoutes);

module.exports = router;
