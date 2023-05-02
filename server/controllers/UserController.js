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
      const checkDupeUsername = await User.findOne({
        username: payload.username,
      });
      const checkDupeNickname = await User.findOne({
        username: payload.nickname,
      });
      if (checkDupeUsername)
        throw new ApiErrorResponse("username already existed", 406);
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
   * getAllUsers
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async getAllUsers(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const users = await User.find({});

      return {
        code: 200,
        data: users,
        message: "",
      };
    });
    res.json(result);
  },

  /**
   * getAllOnlineUsers
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async getAllOnlineUsers(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const users = await User.find({ status: "Online" });
      return {
        code: 200,
        data: users,
        message: "",
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

  /**
   * deleteUserById
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async deleteAllUser(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const user = await User.deleteMany({});
      return {
        code: 200,
        data: user,
        message: "All users deleted",
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
  async getUserById(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const userId = req.params.id;
      const user = await User.findById(userId);

      return {
        code: 200,
        data: user,
        message: "",
      };
    });
    res.json(result);
  },

  /**
   * getUserByNickname
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async getUserByNickname(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const nickname = req.params.nickname;
      const user = await User.findOne({ nickname: nickname });

      return {
        code: 200,
        data: user,
        message: "",
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

  /**
   * deleteUserById
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async deleteUserById(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);

      return {
        code: 200,
        data: user,
        message: "user deleted",
      };
    });
    res.json(result);
  },

  /**
   * addFriendById
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async addFriendById(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const userId = req.params.id;
      console.log(req.body)
      const friendId = req.body.friendid;
      const friend = await User.findById(friendId);
      const user = await User.findById(userId);
      if (!friend) {
        return res.status(404).json({ error: "User not found" });
      }
      if (user.friends.includes(friendId)) {
        return res
          .status(200)
          .json({ message: "User already added as friend" });
      }
      user.friends.push(friendId);
      await user.save();
      return {
        code: 200,
        data: user,
        message: "friend added",
      };
    });
    res.json(result);
  },

  /**
   * getFriendById
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async getFriendById(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const userId = req.params.id;
      const user = await User.findById(userId);
      return {
        code: 200,
        data: user.friends,
        message: "",
      };
    });
    res.json(result);
  },
  
  /**
   * getFriendNameById
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
  */
 async getFriendNameById(req, res, next) {
   const result = await tryCatchMongooseService(async () => {
     const userId = req.params.id;
     const user = await User.findById(userId);

     const friendNicknames = await Promise.all(user.friends.map(async friendId => {
      const friend = await User.findById(friendId);
      return friend.nickname;
    }));
    const userWithNicknames = {
      ...user.toObject(),
      friends: friendNicknames
    };

     return {
       code: 200,
       data: userWithNicknames.friends,
       message: "",
      };
    });
    res.json(result);

  },
};

module.exports = UserController;
