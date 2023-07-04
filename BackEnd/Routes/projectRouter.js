const express = require("express");
const router = express.Router();
const projectController = require("../Controllers/ProjectController");
const upload = require("../Middleware/handleimage");

// Route for creating a new project
router.post("/createProject", upload.single("image"), projectController.createProject);

router.get('/projectTodo/:userId', projectController.getAllProjectTodo);

// Route for fetching a project by ID
router.get("/projects/:owner", projectController.getProjectById);

router.get("/projectss/:id", projectController.getProjectByIdOfProject);

router.get("/status/:userId", projectController.getUserStatus);

router.put("/payment/:id", projectController.payment)

// Route for updating a project by ID
router.put("/updateProjectById/:projectId", projectController.updateProjectById);

router.put("/sendReq/:userId", projectController.sendRequest);

router.put('/acceptRequest', projectController.acceptRequest);

// Route for canceling a specialist in a project
router.put('/cancelRequest', projectController.cancelRequest);

module.exports = router;
