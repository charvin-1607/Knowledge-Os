const User = require("../models/User");
const Note = require("../models/Note");
const bcrypt = require("bcryptjs");




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

// Delete user and all associated notes

async function deleteUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Delete all notes created by this user
        await Note.deleteMany({ userId: user._id });

        // Delete user account
        await User.findByIdAndDelete(user._id);

        return res.status(200).json({
            success: true,
            message: "User and all associated notes deleted successfully",
            user: user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}




// get me 

async function getMe(req, res) {

    try {
        const user = await User.findById(req.user.id).select("-password");

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


// update password 


async function updatePassword(req, res) {

    try {

        const { currentPassword, newPassword } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Compare current password with hashed password

        const isPasswordCorrect = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!isPasswordCorrect) {

            return res.status(400).json({
                success: false,
                message: "Current password is incorrect"
            });

        }

        // Hash new password

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password

        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({

            success: true,
            message: "Password updated successfully"

        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

module.exports = {
    getUserById,
    updateUserById,
    deleteUserById,
    getMe,
    updatePassword
};
