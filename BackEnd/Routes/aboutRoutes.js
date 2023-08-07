const express = require('express');
const router = express.Router();
const aboutController = require('../Controllers/AboutController');

router.get('/about', aboutController.showAbout);

module.exports = router;