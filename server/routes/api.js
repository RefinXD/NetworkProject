const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const roomRouter = require("./room");

router.use(userRouter);
router.use(roomRouter);

module.exports = router;
