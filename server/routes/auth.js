const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

router.post("/login", AuthController.userLogin);
router.get("/verifyToken", AuthController.userVerifyToken);

module.exports = router;
