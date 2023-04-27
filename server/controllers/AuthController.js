const ApiErrorResponse = require("../exception/ApiErrorResponse");
const User = require("../model/User");
const { tryCatchMongooseService } = require("../utils/utils");
const bcrypt = require("bcrypt");
const { createToken, verifyToken } = require("../services/jwtService");

const AuthController = {
  /**
   * login
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async userLogin(req, res, next) {
    const result = await tryCatchMongooseService(async () => {
      const payload = req.body;
      if (!payload.username || !payload.password)
        throw new ApiErrorResponse(
          "please provide both username and password",
          400
        );
      const user = await User.findOne({ username: payload.username });
      if (!user)
        throw new ApiErrorResponse("invalid username or password", 401);

      if (!(await bcrypt.compare(payload.password, user.password))) {
        throw new ApiErrorResponse("invalid username or password", 401);
      } else {
        const userData = JSON.parse(JSON.stringify(user));
        delete userData.draft;
        delete userData.password;
        delete userData.image;
        const token = createToken(userData);
        return {
          code: 200,
          data: user,
          token: token,
          message: "login successful",
        };
      }
    });

    if (result.code == 200) {
      // Set the HttpOnly cookie in the response
      res.cookie("jwt", result.token, {
        httpOnly: true,
        maxAge: 3600000, // 1 day in milliseconds
        secure: process.env.NODE_ENV === "production", // Set to true in production environment
        sameSite: "strict", // Prevent cross-site request forgery (CSRF) attacks
      });
    }
    console.log("login result", result);
    res.json(result);
  },
};
module.exports = AuthController
