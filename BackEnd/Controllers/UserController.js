const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function generateToken({ firstName, email }) {
  const user = { firstName, email };
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return token;
}

function generateTokenLogin({ email }) {
  const user = { email };
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return token;
}

// Controller methods
module.exports = {
  addUser: async (req, res) => {
    try {
      const { fullName, password, email, skills, experience, major } = req.body;
      const token = generateToken({
        name: fullName,
        email: email,
      });
      const newAccount = new User({
        name: fullName,
        email: email,
        password: password,
        skills,
        experience,
        major,
      });

      const users = await User.findOne({ email });
      if (users) {
        return res.json({ error: "this email is already exists" });
      }

      const newUser = await newAccount.save();
      res.json({ message: "Success adding new user", Tok: token });
      console.log(token);
    } catch (error) {
      console.error("error adding new user", error);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      // console.log(token);
      const userInfo = await User.findOne({ email });
      if (!userInfo) {
        return res.json({ error: "email not found" });
      }

      const checkPass = await bcrypt.compare(password, userInfo.password);
      // if (!checkPass) {
      //   return res.json({ error: "Invallid password" });
      // }
      const token = generateTokenLogin({
        email,
      });
      res.json({ message: "Success Login user", Tok: token, pass: checkPass });
    } catch (error) {
      console.error("failed in login", error);
    }
  },

  allUsers: async (req, res) => {
    // select * from user = find()
    const users = await User.find();
    res.json(users);
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const name = req.body.name;
      const imagePath = req.file.path;
      const imageUrl = `http://localhost:5000/${imagePath}`;
      const user = await User.findById(id);

      if (!user) {
        console.log("User not found");
        return;
      }
      user.imageUrl = imageUrl || user.imageUrl;
      user.name = name || user.name;
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  },

  getUser: async (req, res) => {
    try {
      if (!req?.user)
        return res.status(400).json({ message: "User is UnAuthorized" });

      const user = await User.findOne({ email: req.user.email })
        .populate({
          path: "projects.project",
          model: "Project",
        })
        .populate({
          path: "projectTodo.project",
          model: "Project",
        })
        .exec();

      if (!user) {
        return res
          .status(204)
          .json({ message: `User Email ${req.user.email} not found` });
      }

      res.json(user);
    } catch (error) {
      console.error("Failed to get user", error);
      res.status(500).json({ message: "Failed to get user" });
    }
  },
  addReport: async (req, res) => {
    try {
      const { reporter, reason, reportOn } = req.body;
      const report = {reporter, reason}
      const users = await User.findByIdAndUpdate(reportOn, {report})
      if (!users) {
        return res.json({ error: "this user is not found" });
      }
      res.json({message: "Success Reporting"})
    } catch (error) {
      console.error("error add new Report", error);
    }
  },
};
