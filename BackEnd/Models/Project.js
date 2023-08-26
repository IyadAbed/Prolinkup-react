const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  skillsNeeded: {
    type: [], 
    required: true,
  },
  specialists: [
    {
      specialist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      status: {
        type: String,
        enum: ['pending', 'cancelled', 'accepted'],
        default: 'pending',
      },
      chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
      },
    },
  ],
  imageUrl: {
    type: String,
  },
  payment: {
    price: {
      type: Number
    },
    isPaid: {
      type:Boolean,
      default: false
    }
  },
  status: {
    type: String,
    enum: ['pending', 'started', 'finished'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
