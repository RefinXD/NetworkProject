const express = require("express");
const router = express.Router();
const roomController = require("../controllers/RoomController");
const { authUser } = require("../middlewares/auth");

router.post("/room", authUser, roomController.createRoom);
router.delete("/room", authUser, roomController.deleteAllRooms);
router.delete("/room/:roomId", authUser, roomController.deleteRoomById);
router.get("/room", authUser, roomController.getAllRooms);
router.get("/room/:roomId", authUser, roomController.getRoomById);
router.put("/room/:roomId", authUser, roomController.updateRoomById);
module.exports = router;
