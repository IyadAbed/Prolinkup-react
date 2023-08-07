const About = require("../Models/About");

module.exports.showAbout = async(req , res)=>{
  try{
     const about = await About.find();
     res.json(about);
  }catch(error){

      res.status(500).json({ error: "cannot get about text" });
  }
}