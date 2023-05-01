const express = require("express");
const ApiErrorResponse = require("../exception/ApiErrorResponse");
const Room = require("../model/Room");
const { tryCatchMongooseService } = require("../utils/utils");

const RoomController = {
  /**
   * createRoom
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async createRoom(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const payload = req.body;
      const checkDupeRoomname = await Room.findOne({
        roomname: payload.roomname,
      });
      if (checkDupeRoomname)
        throw new ApiErrorResponse("Room name already existed", 406);

      const room = new Room(payload);
      await room.save();
      return {
        code: 201,
        data: room,
        message: "room created",
      };
    });
    res.json(result);
  },

  /**
   * getAllRooms
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async getAllRooms(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const rooms = await Room.find({});

      return {
        code: 200,
        data: rooms,
        message: "",
      };
    });
    res.json(result);
  },

  /**
   * deleteAllRooms
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async deleteAllRooms(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const rooms = await Room.deleteMany({});
      return {
        code: 200,
        data: rooms,
        message: "All rooms deleted",
      };
    });
    res.json(result);
  },

  /**
   * getUserById
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async getRoomById(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const roomId = req.params.id;
      const room = await Room.findById(roomId);

      return {
        code: 200,
        data: room,
        message: "",
      };
    });
    res.json(result);
  },

  /**
   * updateRoomById
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async updateRoomById(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const roomId = req.params.id;
      const payload = req.body;
      await Room.findByIdAndUpdate(roomId, { $set: payload });
      const updatedRoom = await Room.findById(roomId);
      return {
        code: 204,
        data: updatedRoom,
        message: "room updated",
      };
    });
    res.json(result);
  },

  /**
   * deleteRoomById
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async deleteRoomById(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const roomId = req.params.id;
      const room = await Room.findByIdAndDelete(roomId);

      return {
        code: 200,
        data: room,
        message: "room deleted",
      };
    });
    res.json(result);
  },

};

module.exports = RoomController;
