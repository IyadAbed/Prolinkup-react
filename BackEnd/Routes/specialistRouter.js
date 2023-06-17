const express = require("express");
const router = express.Router();

const userController = require("../Controllers/SpecialistController");


// router.get("/users", userController.allUsers);
router.post("/addSpecialist", userController.addSpecialist);
// router.post("/log", userController.login);
// router.put("/updateUser", userController.updateUser);

module.exports = router;