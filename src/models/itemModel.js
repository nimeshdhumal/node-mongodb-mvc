const mongoose = require("mongoose");
const schema = require("../utils/schemas");//Getting all schemas;;;

module.exports= mongoose.model('items',schema.saveRequest);