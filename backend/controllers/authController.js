const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// REGISTER USER


async function signup(req, res){
    try {
        const { name, email, password } = req.body;

        // Basic Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Basic password validation
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters"
            });
        }

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        console.log("user = ",user);

        // Response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.log("Register Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


// LOGIN
async function login(req, res){
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
      console.log("Generated Token:", token); // Debugging log
  
      // Set token in HTTP-only cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000
      });
  
     
  
      res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
  
      
      console.log("Login successful for user:", user.email); // Debugging log
  
    
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
      console.error("Login Error:", error.message); // Debugging log
    }
  };
  


  //logout

async function logout(req, res) {
    
        try {
            res.clearCookie("token", {
                httpOnly: true,
                secure: false, 
              });
          
              res.status(200).json({
                success: true,
                message: "Logged out successfully",
              });

        } catch (error) {
            res.status(500).json({ success: false, message: "Server error" });
        }
    }






module.exports = {
    signup,
    login,
    logout
};



