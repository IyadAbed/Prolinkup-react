const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const specialistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
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
    required: true,
  },
  user_token: {
    type: String,
    required: true
  }
},{ timestamp: true });

specialistSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('Specialist', specialistSchema);
