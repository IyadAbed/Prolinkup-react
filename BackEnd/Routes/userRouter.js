const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");
const verifyUser = require("../Middleware/verify");
const upload = require("../Middleware/handleimage");


router.get("/users", userController.allUsers);
router.get("/getUser", verifyUser, userController.getUser);
router.post("/addUser", userController.addUser);
router.post("/addReport", userController.addReport);
router.post("/log", userController.login);
router.put("/updateUser/:id", upload.single("image"), userController.updateUser);



module.exports = router;
