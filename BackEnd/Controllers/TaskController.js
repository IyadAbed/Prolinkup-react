// const Task = require('../Models/Tasks');

// // Controller action for creating a new task
// exports.createTask = async (req, res) => {
//   try {
//     const { projectId, title, description, assignedTo } = req.body;

//     // Create a new task instance
//     const task = new Task({
//       projectId,
//       title,
//       description,
//       assignedTo,
//     });

//     // Save the task to the database
//     await task.save();

//     res.status(201).json({ message: 'Task created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// // Controller action for fetching a task by ID
// exports.getTaskById = async (req, res) => {
//   try {
//     const { taskId } = req.params;

//     // Find the task by ID
//     const task = await Task.findById(taskId);

//     if (!task) {
//       return res.status(404).json({ message: 'Task not found' });
//     }

//     res.status(200).json(task);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// // Controller action for updating a task by ID
// exports.updateTaskById = async (req, res) => {
//   try {
//     const { taskId } = req.params;
//     const { title, description, assignedTo, status } = req.body;

//     // Find the task by ID and update the fields
//     const updatedTask = await Task.findByIdAndUpdate(
//       taskId,
//       { title, description, assignedTo, status },
//       { new: true }
//     );

//     if (!updatedTask) {
//       return res.status(404).json({ message: 'Task not found' });
//     }

//     res.status(200).json(updatedTask);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
