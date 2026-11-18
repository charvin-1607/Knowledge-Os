
const BASE_URL = "http://localhost:5000/api/admin";

// GET ALL USERS FOR ADMIN DASHBOARD
const getAllUsersAPI = async (page = 1, limit = 10) => {
    try {
        const response = await fetch(
            `${BASE_URL}/users?page=${page}&limit=${limit}`,
            {
                method: "GET",
                credentials: "include"
            }
        );

        const data = await response.json();

        return data;

    } catch (error) {
        return {
            success: false,
            message: error.message || "Failed to fetch users"
        };
    }
};

// GET SELECTED USER'S NOTES

const getUserNotesAPI = async (userId) => {

    try {

        const response = await fetch(
            `${BASE_URL}/users/${userId}/notes`,
            {
                method: "GET",
                credentials: "include"
            }
        );

        const data = await response.json();

        return data;

    } catch (error) {

        return {
            success: false,
            message: error.message || "Failed to fetch user notes"
        };

    }

};

export {
    getAllUsersAPI,
    getUserNotesAPI
};
