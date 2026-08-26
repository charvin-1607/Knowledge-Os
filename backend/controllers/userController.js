const User = require("../models/User");


//get all users

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            users: users
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}


// get user by id

async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);

        // console.log("req = ",req);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user: user
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}


// update user by id

async function updateUserById(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message 
        });
    }

}


// delete user by id

async function deleteUserById(req, res) {
    
        try {
            const user = await User.findByIdAndDelete(req.params.id);
    
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });
            }
            
            res.status(200).json({
                success: true,
                message: "User deleted successfully",
                user: user
            });
    
        } catch (error) {
    
            res.status(500).json({
                success: false,
                message: error.message 
            });
        }
    
    }   



// get me 

async function getMe(req, res) {
    
        try {
            const user = await User.findById(req.user.id);
    
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });
            }
    
            res.status(200).json({
                success: true,
                message: "User fetched successfully",
                user: user
            });
    
        } catch (error) {
            res.status(500).json({ 
                success: false,
                message: error.message 
            });
        }
    }

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    getMe
};
