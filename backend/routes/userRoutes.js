const exprees = require("express");

const router = exprees.Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddlewares");


router.get("/me",authMiddleware,userController.getMe);

router.put("/update-password", authMiddleware,userController.updatePassword);

router.route("/:id")
    .get(authMiddleware,userController.getUserById)
    .patch(authMiddleware,userController.updateUserById)
    .delete(authMiddleware,userController.deleteUserById);





module.exports = router;    