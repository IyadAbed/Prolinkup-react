const express = require('express');
const router = express.Router();
const chatController = require('../Controllers/ChatController');

// Create a new chat message
router.post('/chats', chatController.sendMessage);
router.get('/chatss/:recipient/:sender', chatController.getChatByRecipient);

module.exports = router;
