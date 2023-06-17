const express = require("express");
const router = express.Router();

const userController = require("../Controllers/UserController");

router.get("/users", userController.allUsers);
router.post("/addUser", userController.addUser);
router.post("/log", userController.login);
router.put("/updateUser", userController.updateUser);


module.exports = router;
