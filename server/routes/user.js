const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserControllers");
const { authUser } = require('../middlewares/auth')

// router.get("/user", userController.getAllUsers);
router.post("/user", userController.createUser);
router.delete("/user", authUser, userController.deleteAllUser);
router.delete("/user/:id", authUser, userController.deleteUserById);
router.get('/user', authUser, userController.getAllUsers)
router.get('/user/:id', authUser, userController.getUserById)
router.put('/user/:id', authUser, userController.updateUserById)

module.exports = router;
