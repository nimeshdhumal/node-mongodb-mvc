const itemModel = require('../models/itemModel');

const createItem = async (req, res, next) => {
    try {
        const { name, description, price } = req.body;
        if (!name) {
            res.status(400).send({message:'Name is required'});
            //throw new Error('Name field is required');
        }
        const item = await itemModel.create({ name, description, price });
        res.status(201).json(item);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

module.exports = createItem;