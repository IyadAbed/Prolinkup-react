const mongoose = require('mongoose');

// Define the product schema
const aboutSchema = new mongoose.Schema({
  header: {
    type: String,
    require: true
  },
  text: {
    type: String,
    required: true
  },
  ourMission: {
    type: String,
    require: true
  }
  
},{timestamps:true});

// Create the product model based on the schema
const AboutUs = mongoose.model('AboutUs', aboutSchema);

// Export the model
module.exports = AboutUs;