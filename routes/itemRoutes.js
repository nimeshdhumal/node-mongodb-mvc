const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
router.post('/save',itemController.saveData);
module.exports = router;