const mongoose = require("mongoose");
const schema = require("../utils/schemas");//Getting all schemas;;;

exports.saveData = async () => {
    const schemaSave = mongoose.model('items', schema);//table_name then schema name;;;
    await schemaSave.save();
}