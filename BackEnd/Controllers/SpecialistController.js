const Specialist = require('../Models/Specialist');
const jwt = require("jsonwebtoken");



function generateToken({ fullName, email }) {
  const user = { fullName, email };
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return token;
}

// Controller methods
module.exports = {
  addSpecialist: async (req, res) => {
    try {
      const { fullName, password, email, user_type, skills, experience, availability } = req.body;
      const token = generateToken({
        name: fullName,
        email: email,
      });
      const newAccount = new Specialist({
        name: fullName,
        email: email,
        password: password,
        skills: skills,
        experience: experience,
        availability: availability,
        user_type: user_type,
        user_token: token,
      });

      const users = await Specialist.findOne({ email: email });
      if (users) {
        return res.json({ error: "email has already exist" });
      }

      const newUser = await newAccount.save();
      res.json({ message: "Success adding new specialist", Tok: token });
    } catch (error) {
      console.error("error adding new specialist", error);
    }
  },
};
