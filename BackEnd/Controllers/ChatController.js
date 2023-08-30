const Chat = require("../Models/Chat");

exports.getChatByRecipient = async (req, res) => {
  try {
    const { recipient, sender } = req.params;
    const chat = await Chat.findOne({
      recipient,
      "messages.sender": sender
    })
      .populate("messages.sender")
      .exec();

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const { recipient, sender, content } = req.body;

    let chat = await Chat.findOne({ recipient }).exec();

    if (!chat) {
      // If no chat exists, create a new chat
      chat = await Chat.create({ recipient });
    }

    chat.messages.push({ sender, content });
    await chat.save();
    res.status(200).json(chat);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
