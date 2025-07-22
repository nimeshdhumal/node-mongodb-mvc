module.exports = app => {
    const itemController = require('../controllers/itemController');
    const routes =require('express').Router();
    
    //Create items
    routes.post('/',itemController.saveData);
};