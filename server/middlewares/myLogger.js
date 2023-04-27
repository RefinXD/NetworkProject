/**
 * custom logger
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function Log(req, res, next) {
  return next();
}

module.exports = Log;
