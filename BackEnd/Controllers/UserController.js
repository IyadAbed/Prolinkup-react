const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');

function generateToken({ firstName, email }) {
  console.log(firstName,email);
  const user = { firstName, email };
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return token;
}

function generateTokenLogin({ email }) {
  const user = {firstName, email };
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
      const users = await User.findOne({ email });
      if (users) {
        return res.json({ error: "this email is already exists" });
      }
      const hashPassword = await bcrypt.hash(password, 10)
      const newAccount = new User({
        name: fullName,
        email: email,
        password: hashPassword,
        skills,
        experience,
        major,
      });
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
      if (!checkPass) {
        return res.json({ error: "Invallid password" });
      }
      const token = generateTokenLogin({
        email,
      });
      res.json({ message: "Success Login user", Tok: token, pass: checkPass });
    } catch (error) {
      console.error("failed in login", error);
    }
  },

  forgetPassworld : async (req, res) => {
    try {
      const {email} = req.body;
      const user = await User.findOne({email})
      if(!user) {
        return res.send({Status: "User not existed"})
      } 
      const token = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"})
      const base64Token = Buffer.from(token).toString('base64');
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'iyadrabed@gmail.com',
              pass: 'esyuiyibziktabls'
            }
          });
          const id = user._id
          const mailOptions = {
            from: 'iyadrabed@gmail.com',
            to: 'iyadrabed@gmail.com',
            subject: 'Reset Password Link',
            text: `http://localhost:5173/reset_password/${user._id}/${base64Token}`
          };
            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.send({Status: "Success"})
            }
          });
    } catch (error) {
      console.error("failed in reset password", error);
    }
},

newUserGoogle : async (req, res) => {
  const { name, email, picture, verified_email, id } = req.body;
  const userExist = await User.find({ email: email });
  if (userExist.length == 0) {
    const hashId = await bcrypt.hash(id, 10)
    const NewUser = new User({
      name: name,
      email: email,
      password: hashId,
      imageUrl: picture
    });
    const user = await NewUser.save();
    const token = generateToken({firstName: user.name, email: user.email})
    res.json({ message: "Success adding new user", Tok: token });

  } else {
    const validpassword = await bcrypt.compare(id, userExist[0].password);
    console.log(validpassword);
    if (!validpassword) {
      return res.json({ error: "Invallid password" });
    }
    if (validpassword) {
      const token = jwt.sign({email: userExist[0].email}, process.env.ACCESS_TOKEN_SECRET)
      console.log(token);
      // const user = userExist[0];
      res.json({ message: "Success Login user", Tok: token });
    }
  }
},

resetpassword : (req, res) => {
  const {id, token} = req.params
  const {password} = req.body

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if(err) {
          return res.json({Status: "Error with token"})
      } else {
          bcrypt.hash(password, 10)
          .then(hash => {
              User.findByIdAndUpdate({_id: id}, {password: hash})
              .then(u => res.send({Status: "Success"}))
              .catch(err => res.send({Status: err}))
          })
          .catch(err => res.send({Status: err}))
      }
  })
},

  allUsers: async (req, res) => {
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
        return res.status(401).json({ message: "User is UnAuthorized" });

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
