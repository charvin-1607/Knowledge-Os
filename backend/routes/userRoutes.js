const exprees = require("express");

const router = exprees.Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddlewares");


router.get("/",userController.getAllUsers);

router.get("/me",authMiddleware,userController.getMe);

router.route("/:id")
    .get(authMiddleware,userController.getUserById)
    .patch(authMiddleware,userController.updateUserById)
    .delete(authMiddleware,userController.deleteUserById);





module.exports = router;    