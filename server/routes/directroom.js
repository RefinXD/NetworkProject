const express = require("express");
const router = express.Router();
const directroomController = require("../controllers/DirectRoomController");
const { authUser } = require("../middlewares/auth");

router.post("/directroom", authUser, directroomController.createDirectRoom);

module.exports = router;
