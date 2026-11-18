const User = require("../models/User");
const Note = require("../models/Note");

async function getAllUsers(req, res) {
    try {
        // Pagination
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 10));
        const skip = (page - 1) * limit;

        // Fetch users and dashboard counts
        const [
            users,
            totalAccounts,
            totalAdmins,
            totalNormalUsers
        ] = await Promise.all([
            User.find()
             .select("-password") // Exclude password field
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit),

            User.countDocuments(),

            User.countDocuments({ role: "admin" }),

            User.countDocuments({ role: "user" })
        ]);

        // Get each user's notes count
        const usersWithNotes = await Promise.all(
            users.map(async (user) => {
                const totalNotes = await Note.countDocuments({
                    userId: user._id
                });

                return {
                    ...user.toObject(),
                    totalNotes
                };
            })
        );

        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",

            stats: {
                totalAdmins,
                totalUsers: totalNormalUsers,
                totalAccounts
            },

            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalAccounts / limit),
                totalAccounts,
                limit
            },

            users: usersWithNotes
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// GET SELECTED USER'S NOTES

const getUserNotes = async (req, res) => {

    try {

        const { userId } = req.params;

        // Check user exists
        const user = await User.findById(userId)
            .select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Fetch selected user's notes
        const notes = await Note.find({ userId: userId })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "User notes fetched successfully",

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },

            totalNotes: notes.length,
            notes: notes
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {
    getAllUsers,
    getUserNotes
};