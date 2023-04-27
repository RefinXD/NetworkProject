const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserControllers");

router.get("/user", userController.getAllUsers);
router.post("/user", userController.createUser);
router.delete("/user", userController.deleteAllUser);

module.exports = router;
