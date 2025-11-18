const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const auth = require("../middleware/auth.middleware");
const allow = require("../middleware/role.middleware");

router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected ROutes
router.get("/profile", auth, (req, res) => {
    res.json({ message: "Welcome!", user: req.user });
});

router.get("/boyboy", auth, allow("admin"), (req, res) => {
    res.json({ message: "Admin access granted" });
});

module.exports = router;