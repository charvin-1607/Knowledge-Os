const BASE_URL = "http://localhost:5000/api/users";



  // get me

  const fetchUserAPI = async () => {
    try {
        const res = await fetch(
            "http://localhost:5000/api/users/me",
            {
                method: "GET",
                credentials: "include",
            }
        );

        const data = await res.json();

        console.log("User data fetched:", data);

        return data;

    } catch (error) {
        return { success: false, message: "Failed to fetch user data" };
    }

}

// UPDATE USER
const updateUserAPI = async (userId, userData) => {

    try {

        const response = await fetch(
            `${BASE_URL}/${userId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(userData)
            }
        );

        const data = await response.json();

        return data;

    } catch (error) {
        return { success: false, message: "Failed to fetch user data" };
    }

};


// DELETE USER
const deleteUserAPI = async (userId) => {

    try {

        const response = await fetch(
            `${BASE_URL}/${userId}`,
            {
                method: "DELETE",
                credentials: "include"
            }
        );

        const data = await response.json();

        return data;

    } catch (error) {
        return { success: false, message: "Failed to fetch user data" };
    }

};


export {
    fetchUserAPI,
    updateUserAPI,
    deleteUserAPI
};