const { Schema } = require("mongoose");

exports.saveRequest = new Schema({
    name: String,
    description: String,
    price: Number
});

exports.saveResponse = new Schema({
    status: String,
    message: String,
    data: [{
        __id: Number,
        name: String,
        description: String,
        price: Number,
        item: Number
    },{timestamps:true}]
});