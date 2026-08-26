const User = require('../models/User');
const jwt = require('jsonwebtoken');

async function authMiddleware(req, res, next) {

    // Get token from cookies
    const token = req.cookies.token ;

    // console.log("token from middleware = ", token);

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'No token provided, authorization denied'
        });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user = decoded.user;

         //find user by decoded id and attach to req.user
        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            });
        }

        req.user = {
            id: user._id,
            name: user.name,
            email: user.email,
        };

        return next();

    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Token is not valid'
        });
    }
}

module.exports = authMiddleware;