const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const { authUser } = require("../middlewares/auth");

// router.get("/user", userController.getAllUsers);
router.post("/user", userController.createUser);
router.delete("/user", authUser, userController.deleteAllUser);
router.delete("/user/:id", authUser, userController.deleteUserById);
router.get("/user", authUser, userController.getAllUsers);
router.get("/user/:nickname", authUser, userController.getUserByNickname);
router.get("/onlineUsers", authUser, userController.getAllOnlineUsers);
router.get("/user/:id", authUser, userController.getUserById);
router.get("/user/friends/:id", authUser, userController.getFriendById);
router.put("/user/:id", authUser, userController.updateUserById);
router.post("/user/friends/:id", authUser, userController.addFriendById);

module.exports = router;
