const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

const authMiddleware = require("../middlewares/authMiddlewares");
const roleMiddleware = require("../middlewares/authorizationMiddleware");

router.get(
    "/users",
    authMiddleware,
    roleMiddleware(["admin"]),
    adminController.getAllUsers
);

router.get(
    "/users/:userId/notes",
    authMiddleware,
    roleMiddleware(["admin"]),
    adminController.getUserNotes
);

module.exports = router;