const { verifyToken } = require('../services/jwtService')

const AuthMiddleware = {
    /**
     * authenticate login
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    async authUser(req, res, next) {
        const token = req.cookies.jwt || req.headers.authorization?.split(' ')[1];
        //console.log('authing user', token)
        if(verifyToken(token)) return next()
        else {
            console.log('unauth', verifyToken(token))
            return res.json({
                code: 403,
                message: "forbidden request",
            })
        }
    },
    
}

module.exports = AuthMiddleware