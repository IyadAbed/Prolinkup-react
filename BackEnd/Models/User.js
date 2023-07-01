const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  major: {
    type: [String],
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    // required: true,
  },
  projects: [{
    project:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    messages:[String]
  }],
  projectTodo: [
    {
        project:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Project'
        },
        status: {
          type: String,
          enum: ['pending', 'cancelled', 'accepted'],
          default: 'pending',
        },
        messages: [String]
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // ... other fields as per your requirements
},{ timestamp: true });

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('User', userSchema);
