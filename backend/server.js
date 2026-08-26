const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');


const app = express();

dotenv.config();

const PORT = 5000 || process.env.PORT;

//Middleware
app.use(cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




//db connection the start server
const startServer = async () => {
    try {
        // First → MongoDB Connect
        await connectDB();

        // Second → Server Start
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log("Server not started because MongoDB connection failed");
    }
};

startServer();





//Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
