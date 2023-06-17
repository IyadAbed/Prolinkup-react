const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function generateToken({ firstName, email }) {
  const user = { firstName, email };
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return token;
}

// Controller methods
module.exports = {
  addUser: async (req, res) => {
    try {
      const { fullName, password, email, user_type } = req.body;
      const token = generateToken({
        name: fullName,
        email: email,
      });
      const newAccount = new User({
        name: fullName,
        email: email,
        password: password,
        user_type: user_type,
        user_token: token,
      });

      const users = await User.findOne({ email: email });
      if (users) {
        return res.json({ error: "email has already exist" });
      }

      const newUser = await newAccount.save();
      res.json({ message: "Success adding new user", Tok: token });
    } catch (error) {
      console.error("error adding new user", error);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userInfo = await User.findOne({ email: email });
      if (!userInfo) {
        return res.json({ error: "email not found" });
      }

      const checkPass = await bcrypt.compare(password, userInfo.password);
      if (!checkPass) {
        return res.json({ error: "Invallid password" });
      }
      res.json(userInfo.user_token);
    } catch (error) {
      console.error("failed in login", error);
    }
  },

  allUsers: async (req, res) => {
    // select * from user = find()
    const users = await User.find()
    res.json(users)
  },

  updateUser: async (req, res) => {
    try {
      const {userId, newData} = req.body
      const user = await User.findById(userId);
  
      if (!user) {
        console.log('User not found');
        return;
      }
  

      user.name = newData.name || user.name;
      user.password = newData.password || user.password

  
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      console.error('Error editing user:', error);
    }
  },
};
