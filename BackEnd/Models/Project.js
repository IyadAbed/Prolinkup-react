const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  // ... other fields as per your requirements
},{ timestamp: true });

module.exports = mongoose.model("Project", projectSchema);
