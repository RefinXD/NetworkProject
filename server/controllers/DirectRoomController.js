const express = require("express");
const ApiErrorResponse = require("../exception/ApiErrorResponse");
const DirectRoom = require("../model/DirectRoom");
const { tryCatchMongooseService } = require("../utils/utils");

const RoomController = {
  /**
   * createRoom
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async createDirectRoom(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const payload = req.body;
      
      const checkDupeRoomname = await DirectRoom.findOne({
        roomname: payload.roomname,
      });
      if (!checkDupeRoomname){
        const room = new DirectRoom(payload);
        await room.save();
        return {
          code: 201,
          data: room,
          message: "room created",
        };
      }
      return {
        code: 201,
        data: {},
        message: "room joined",
      };
      
    });
    res.json(result);
  }
};

module.exports = DirectRoomController;


