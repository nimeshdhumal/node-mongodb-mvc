const express = require('express');
const router = express.Router();
const createItem = require('../controllers/itemController');

router.post('/save',createItem);

module.exports = router;