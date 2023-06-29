const Project = require("../Models/Project");
const User = require("../Models/User");

// Controller action for creating a new project
exports.createProject = async (req, res) => {
  try {
    const { name, description, owner } = req.body;
    const imagePath = req.file.path;
    const imageUrl = `http://localhost:5000/${imagePath}`;
    // Create a new project instance

    const project = new Project({
      name,
      description,
      owner,
      imageUrl,
    });

    // Save the project to the database
    await project.save();

    // Find the owner by ID
    const user = await User.findById(owner);

    if (!user) {
      return res.status(404).json({ message: "Owner not found" });
    }

    // Add the project ID to the owner's projects array
    user.projects.push(project._id);

    // Save the updated user
    await user.save();

    res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding new project" });
  }
};

// Controller action for fetching a project by ID
exports.getProjectById = async (req, res) => {
  try {
    const { owner } = req.params;
    // Find the project by ID
    const project = await Project.find({ owner });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller action for updating a project by ID
exports.updateProjectById = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { name, description } = req.body;

    // Find the project by ID and update the fields
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { name, description },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.sendRequest = async (req, res) => {
  try {
    const { userId } = req.params;
    const { projectId } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const addSpecialistToProject = {
      specialist: userId,
      status: "pending",
    };

    // Create the project object with default status 'pending'
    const projectObj = {
      project: projectId,
      status: "pending",
    };

    project.specialists.push(addSpecialistToProject);

    // Add the project object to the projectTodo array
    user.projectTodo.push(projectObj);

    // Save the updates
    await user.save();

    await project.save();

    res
      .status(200)
      .json({ message: "Send request to specialist successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Issue in Sending request to specialist" });
  }
};

exports.getUserStatus = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { projectTodo } = user;

    // Extract the status from the projectTodo array
    const projectTodoStatus = projectTodo.map((todo) => todo.status);

    res.status(200).json({ user, projectTodoStatus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error getting status" });
  }
};

exports.acceptRequest = async (req, res) => {
  try {
    const { projectId, userId } = req.body;

    // Find the project by ID
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Find the specialist object in the project's specialists array
    const specialist = project.specialists.find(
      (sp) => sp.specialist.toString() === userId
    );

    if (!specialist) {
      return res
        .status(404)
        .json({ message: "Specialist not found in the project" });
    }

    // Update the specialist's status to 'accepted'
    specialist.status = "accepted";

    // Save the updated project
    await project.save();

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the projectTodo object in the user's projectTodo array
    const projectTodo = user.projectTodo.find(
      (pt) => pt.project.toString() === projectId
    );

    if (!projectTodo) {
      return res
        .status(404)
        .json({ message: "Project not found in the user's projectTodo" });
    }

    // Update the projectTodo's status to 'accepted'
    projectTodo.status = "accepted";

    // Save the updated user
    await user.save();

    res.status(200).json({ message: "Specialist accepted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error accepting the request" });
  }
};

exports.cancelRequest = async (req, res) => {
  try {
    const { projectId, userId } = req.body;

    // Find the project by ID
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Find the specialist object in the project's specialists array
    const specialist = project.specialists.find(
      (sp) => sp.specialist.toString() === userId
    );

    if (!specialist) {
      return res
        .status(404)
        .json({ message: "Specialist not found in the project" });
    }

    // Remove the specialist from the project's specialists array
    project.specialists.pull(specialist);

    // Save the updated project
    await project.save();

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the projectTodo object in the user's projectTodo array
    const projectTodo = user.projectTodo.find(
      (pt) => pt.project.toString() === projectId
    );

    if (!projectTodo) {
      return res
        .status(404)
        .json({ message: "Project not found in the user's projectTodo" });
    }

    // Update the projectTodo's status to 'cancelled'
    projectTodo.status = "cancelled";

    // Save the updated user
    await user.save();

    res.status(200).json({ message: "Specialist cancelled successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error cancelling the Request" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    // Find the project by ID
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Check if there are specialists who have accepted requests for the project
    const acceptedSpecialists = project.specialists.some(
      (sp) => sp.status === "accepted"
    );

    if (acceptedSpecialists) {
      return res.status(400).json({
        message: "Cannot delete the project as specialists have accepted requests.",
      });
    }

    // Delete the project
    await project.remove();

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

