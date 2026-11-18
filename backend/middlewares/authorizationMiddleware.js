const roleMiddleware = (role) => {
    return (req, res, next) => {
        try {
            
            // Check if user is authenticated and has a role
            //console.log("req.user = ", req.user);


            if (!req.user || !req.user.role) {
                return res.status(403).json({ success: false, message: "Access denied" });
            }

            // if (!roles.includes(req.user.role)) {
            //   return res.status(403).json({success:false, message: "Not authorized" });
            // }

            // Check if user has the required role (e.g., admin)
            if (req.user.role !== 'admin') {
                return res.status(403).json({
                    success: false,
                    message: 'User not authorized'
                });
            }

            return next();
        } catch (error) {
            return res.status(500).json({ success: false, message: "Server error" });
        }
    };
};


module.exports = roleMiddleware;

