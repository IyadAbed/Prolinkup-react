const express = require("express");
const router = express.Router();

const userController = require("../Controllers/UserController");
const verifyUser = require("../Middleware/verify");

router.get("/users", userController.allUsers);
router.get("/userss", verifyUser, userController.getUser);
router.post("/addUser", userController.addUser);
router.post("/log", userController.login);
router.put("/updateUser", userController.updateUser);


module.exports = router;
