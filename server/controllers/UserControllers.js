const express = require("express");
const ApiErrorResponse = require("../exception/ApiErrorResponse");
const User = require("../model/User");
const { tryCatchMongooseService } = require("../utils/utils");
const bcrypt = require("bcrypt");

const UserController = {
  /**
   * createUser
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async createUser(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const payload = req.body;
      const checkDupeNickname = await User.findOne({
        nickname: payload.nickname,
      });
      if (checkDupeNickname)
        throw new ApiErrorResponse("nickname already existed", 406);
      if (!payload.password)
        throw new ApiErrorResponse("please specify password", 400);
      if (payload.password.length < 6)
        throw new ApiErrorResponse(
          "password must be at least 6 characters",
          400
        );
      if (!payload.username)
        throw new ApiErrorResponse("please specify username", 400);
      payload.password = bcrypt.hashSync(payload.password, 10);
      const user = new User(payload);
      await user.save();
      return {
        code: 201,
        data: user,
        message: "user created",
      };
    });
    res.json(result);
  },

  /**
   * updateUserById
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async updateUserById(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const userId = req.params.id;
      const payload = req.body;
      await User.findByIdAndUpdate(userId, { $set: payload });
      const updatedUser = await User.findById(userId);
      return {
        code: 204,
        data: updatedUser,
        message: "user updated",
      };
    });
    res.json(result);
  },
};

module.exports = UserController;