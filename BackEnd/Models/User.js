const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
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
    projects: [
      {
        project: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Project",
        },
        chat: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Chat",
        },
      },
    ],
    projectTodo: [
      {
        project: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Project",
        },
        status: {
          type: String,
          enum: ["pending", "cancelled", "accepted"],
          default: "pending",
        },
        messages: [
          {
            specialist: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
            message: [String],
          },
        ],
        price: Number
      },
    ],
    startPrice:{
      type: Number
    },
    endPrice:{
      type: Number
    },
    report:[{
      reporter:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      reason:{
        type: String
      }
    }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", userSchema);
