const signupAPI = async (userData) => {

    const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(userData),
        }
    );

    const data = await response.json();
    return data;
};

const loginAPI = async (email,password) => {
    
        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                credentials: "include",
                body: JSON.stringify({email,password}),
            }
        );
    
        const data = await response.json();
        return data;
    }

    //  Logout API
const logoutAPI = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );
  
      return await res.json();
    } catch (error) {
      return { success: false, message: "Logout failed" };
    }
  };


  // get me

  const getMeAPI = async () => {
    try {
        const res = await fetch(
            "http://localhost:5000/api/users/me",
            {
                method: "GET",
                credentials: "include",
            }
        );

        return await res.json();
    } catch (error) {
        return { success: false, message: "Failed to fetch user data" };
    }

}

export {
    signupAPI,
    loginAPI,
    logoutAPI,
    getMeAPI
};