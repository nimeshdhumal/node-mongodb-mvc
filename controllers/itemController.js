const itemModels = require('../models/itemModel');

exports.saveData = (req, res) => {
    return res.status(200).send('Item inserted successfully!');
};