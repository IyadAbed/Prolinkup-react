const User = require("../models/quotesModel");

const addQuote = async (req, res) => {
  try {
    const { name, quote , list} = req.body;

    const newQuote = await User({
      name: name,
      quote: quote,
      list: list
    });

    newQuote.save();

    res.status(200).json("quote added successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to add quote" });
  }
};

const updateQuote = async (req, res) => {
  try {
    const {name, quote , list } = req.body;
    const quotetID  = req.params.id;

    const update = await User.findOneAndUpdate(
      { _id: quotetID },
      {
        name: name,
        quote: quote,
        list: list
      }
    );

    res.status(201).json('quote updated successfully ')
  } catch (error) {
    res.status(500).json({ error: "Failed to update quote" });
}
};

const showQuotes = async(req , res)=>{
    try{
       const quotes = await User.find();
       res.json(quotes);
    }catch(error){

        res.status(500).json({ error: "cannot get quotes" });
    }
}

module.exports = {
  addQuote,
  updateQuote,
  showQuotes,
};
